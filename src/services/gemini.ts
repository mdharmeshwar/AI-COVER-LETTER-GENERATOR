const GEMINI_MODEL = "gemini-1.5-flash";

type GeminiResponse = {
  candidates?: Array<{
    content?: {
      parts?: Array<{ text?: string }>;
    };
  }>;
  error?: { message?: string };
};

type FreeLLMResponse = {
  success: boolean;
  response?: string;
  error?: string;
};

function getProvider() {
  return ((import.meta.env.VITE_AI_PROVIDER as string | undefined) || "apifreellm").toLowerCase();
}

export async function generateWithAi(prompt: string) {
  const provider = getProvider();

  if (provider === "apifreellm") {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: prompt,
        model: "apifreellm",
      }),
    });

    const data = (await response.json()) as FreeLLMResponse;

    if (!response.ok || !data.success || !data.response) {
      throw new Error(data.error || "FreeLLM request failed. Please verify your server proxy and AI key.");
    }

    return data.response.trim();
  }

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;

  if (!apiKey) {
    throw new Error("Missing VITE_GEMINI_API_KEY. Add it to your .env file and restart the dev server.");
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.72,
          topP: 0.92,
          maxOutputTokens: 1400,
        },
      }),
    },
  );

  const data = (await response.json()) as GeminiResponse;

  if (!response.ok) {
    throw new Error(data.error?.message || "Gemini request failed. Please verify your API key.");
  }

  const text = data.candidates?.[0]?.content?.parts?.map((part) => part.text).join("\n").trim();
  if (!text) {
    throw new Error("Gemini returned an empty response. Please try again.");
  }

  return text;
}

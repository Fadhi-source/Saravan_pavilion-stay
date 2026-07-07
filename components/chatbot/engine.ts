import { intents, type Intent } from "./knowledge";

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();
}

export interface MatchResult {
  intent: Intent;
  confidence: number;
}

export function matchIntent(input: string): MatchResult {
  const normalized = normalize(input);
  const words = normalized.split(/\s+/).filter(Boolean);

  if (words.length === 0) {
    return { intent: intents.find((i) => i.id === "greeting")!, confidence: 0 };
  }

  let best: MatchResult = {
    intent: intents.find((i) => i.id === "fallback")!,
    confidence: 0,
  };

  for (const intent of intents) {
    if (intent.id === "fallback") continue;

    let score = 0;

    for (const pattern of intent.patterns) {
      const pWords = pattern.toLowerCase().split(/\s+/);

      // Check if all pattern words appear in the input (phrase match)
      const allWordsPresent = pWords.every((pw) => words.includes(pw));
      if (allWordsPresent) {
        // Score based on what fraction of the input words matched
        const matchedWords = pWords.filter((pw) => words.includes(pw)).length;
        score = Math.max(score, matchedWords / Math.max(words.length, pWords.length));
      }

      // Check individual word overlap
      const overlap = pWords.filter((pw) => words.includes(pw)).length;
      const union = new Set([...pWords, ...words]).size;
      const jaccard = overlap / union;

      score = Math.max(score, jaccard);
    }

    if (score > best.confidence) {
      best = { intent, confidence: score };
    }
  }

  // Require minimum confidence for a non-fallback match
  if (best.confidence < 0.25 && best.intent.id !== "fallback") {
    return {
      intent: intents.find((i) => i.id === "fallback")!,
      confidence: best.confidence,
    };
  }

  return best;
}

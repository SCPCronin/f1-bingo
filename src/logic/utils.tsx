import CardPrompts from '../data/CardPrompts.json'

export function generateListOfPrompts(): string[] {
    const prompts: string[] = [];
    const tempCardPrompts = [...CardPrompts.Prompts]; // Create a copy of the data
    for (let i = 0; i < 25; i++) {
      const randomIndex = Math.floor(Math.random() * tempCardPrompts.length);
      prompts.push(tempCardPrompts[randomIndex].prompt);
      tempCardPrompts.splice(randomIndex, 1);
    }
    return prompts;
  }


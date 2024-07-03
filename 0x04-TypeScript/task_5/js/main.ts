// Define MajorCredits interface
export interface MajorCredits {
  credits: number;
  brand: 'major';
}

// Define MinorCredits interface
export interface MinorCredits {
  credits: number;
  brand: 'minor';
}

// Define the sumMajorCredits function
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major'
  };
}

// Define the sumMinorCredits function
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor'
  };
}

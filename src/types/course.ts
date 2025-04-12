export interface LearningStage {
  id: string;
  title: string;
  description: string[];
}

export interface Overview {
  id: string;
  title: string;
}

export interface ReasonsToJoin {
  id: string;
  title: string;
  icon: string;
}

export interface StudyDetails {
  duration: string;
  totalHours: string;
  hoursPerSession: string;
  schedule: string;
}

export interface FeatureStep {
  number: string;
  title: string;
  description: string;
}

export interface Evaluate {
  id: string;
  author: {
    name: string;
    position: string;
    image: {
      src: string;
      alt?: string;
    };
  };
  comment: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Contact {
  icon: "phone"; // TODO: add other icons
  text: string;
  link: string;
}

export interface Social {
  platform: "facebook" | "zalo"; // TODO: add other platforms
  text: string;
  link: string;
}

export interface Banner {
  title: string;
  subtitle: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface Course {
  id: string;
  learningStages: LearningStage[];
  overview: Overview[];
  reasonsToJoin: ReasonsToJoin[];
  studyDetails: StudyDetails;
  featureSteps: FeatureStep[];
  faq: FAQ[];
  contact: Contact[];
  social: Social[];
  banner: Banner;
  evaluate: Evaluate[];
}

export interface ICourseRoadmap {
  id: string;
  title: string;
  description: string[];
}

export interface IOverview {
  id: string;
  title: string;
}

export interface IReasonsToJoin {
  id: string;
  title: string;
  icon: string;
}

export interface IStudyDetails {
  duration: string;
  totalHours: string;
  hoursPerSession: string;
  schedule: string;
}

export interface ICourseFeatures {
  number: string;
  title: string;
  description: string;
}

export interface IEvaluate {
  id: string;
  author: {
    name: string;
    image: {
      src: string;
      alt?: string;
    };
  };
  rating: number;
  vi: {
    position: string;
    comment: string;
  };
  en: {
    position: string;
    comment: string;
  };
}

export interface IFAQ {
  id: string;
  question: string;
  answer: string;
}

export interface IContact {
  icon: 'phone'; // TODO: add other icons
  text: string;
  link: string;
}

export interface ISocial {
  platform: 'facebook' | 'zalo'; // TODO: add other platforms
  text: string;
  link: string;
}

export interface IBanner {
  title: string;
  subtitle: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface ICourse {
  name: string;
  description: string;
  courseRoadmap: ICourseRoadmap[];
  overview: IOverview[];
  reasonsToJoin: IReasonsToJoin[];
  studyDetails: IStudyDetails;
  courseFeatures: ICourseFeatures[];
  faq: IFAQ[];
  banner: IBanner;
  evaluate: IEvaluate[];
}

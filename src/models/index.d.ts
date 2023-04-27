import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";

export enum ModuleType {
  LESSON = "LESSON",
  LOTM = "LOTM",
  MICROLESSON = "MICROLESSON"
}

export enum CategoryType {
  MATERIALS = "MATERIALS",
  INDUSTRY = "INDUSTRY",
  FOODANDBEVERAGE = "FOODANDBEVERAGE",
  BUSINESS = "BUSINESS",
  SUPPLYCHAIN = "SUPPLYCHAIN",
  DESIGN = "DESIGN"
}

export enum MediaType {
  VIDEO = "VIDEO",
  IMAGE = "IMAGE",
  SLIDES = "SLIDES"
}

export declare class RegistrationCode {
  readonly code?: string | null;
  constructor(init: ModelInit<RegistrationCode>);
}

export declare class LessonSource {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LessonSource, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly link?: string | null;
  readonly position: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly lessonSourcesId?: string | null;
  constructor(init: ModelInit<LessonSource>);
  static copyOf(source: LessonSource, mutator: (draft: MutableModel<LessonSource>) => MutableModel<LessonSource> | void): LessonSource;
}

export declare class LessonLink {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LessonLink, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly link?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly lessonLinksId?: string | null;
  constructor(init: ModelInit<LessonLink>);
  static copyOf(source: LessonLink, mutator: (draft: MutableModel<LessonLink>) => MutableModel<LessonLink> | void): LessonLink;
}

export declare class Tags {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tags, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tag: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly articleTagsId?: string | null;
  readonly lessonTagsId?: string | null;
  readonly blogTagsId?: string | null;
  constructor(init: ModelInit<Tags>);
  static copyOf(source: Tags, mutator: (draft: MutableModel<Tags>) => MutableModel<Tags> | void): Tags;
}

export declare class Certificate {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Certificate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly title_callout_1?: string | null;
  readonly title_callout_2?: string | null;
  readonly title_text?: string | null;
  readonly title_button_1_text?: string | null;
  readonly title_button_1_link?: string | null;
  readonly title_button_2_text?: string | null;
  readonly title_button_2_link?: string | null;
  readonly title_image?: string | null;
  readonly courses?: (CertificateCourses | null)[] | null;
  readonly whoText?: string | null;
  readonly courses_total?: number | null;
  readonly hours_total?: number | null;
  readonly ceus_total?: number | null;
  readonly brochure_link?: string | null;
  readonly video?: string | null;
  readonly price_full?: number | null;
  readonly price_monthly?: number | null;
  readonly price_features?: (string | null)[] | null;
  readonly lmsLink?: string | null;
  readonly demoLink?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Certificate>);
  static copyOf(source: Certificate, mutator: (draft: MutableModel<Certificate>) => MutableModel<Certificate> | void): Certificate;
}

export declare class Course {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Course, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly slug: string;
  readonly category: CategoryType | keyof typeof CategoryType;
  readonly title: string;
  readonly subhead?: string | null;
  readonly media?: string | null;
  readonly video?: string | null;
  readonly hour?: number | null;
  readonly lessons?: number | null;
  readonly videos?: number | null;
  readonly price?: number | null;
  readonly articles?: (ArticleRelatedCourses | null)[] | null;
  readonly certificate?: (CertificateCourses | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Course>);
  static copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
}

export declare class Article {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Article, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly subhead?: string | null;
  readonly media?: string | null;
  readonly seoImage?: string | null;
  readonly content?: string | null;
  readonly tags?: (Tags | null)[] | null;
  readonly relatedCourses?: (ArticleRelatedCourses | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Article>);
  static copyOf(source: Article, mutator: (draft: MutableModel<Article>) => MutableModel<Article> | void): Article;
}

export declare class Lesson {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Lesson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly subhead?: string | null;
  readonly type?: ModuleType | keyof typeof ModuleType | null;
  readonly media?: string | null;
  readonly mediaType?: MediaType | keyof typeof MediaType | null;
  readonly slides?: (string | null)[] | null;
  readonly seoImage?: string | null;
  readonly content?: string | null;
  readonly sources?: (LessonSource | null)[] | null;
  readonly links?: (LessonLink | null)[] | null;
  readonly tags?: (Tags | null)[] | null;
  readonly objectives?: (string | null)[] | null;
  readonly actionCTA?: string | null;
  readonly actionSubhead?: string | null;
  readonly actionLink?: string | null;
  readonly actionLinkTitle?: string | null;
  readonly actionExample?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Lesson>);
  static copyOf(source: Lesson, mutator: (draft: MutableModel<Lesson>) => MutableModel<Lesson> | void): Lesson;
}

export declare class Blog {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly media?: string | null;
  readonly content: string;
  readonly author?: string | null;
  readonly tags?: (Tags | null)[] | null;
  readonly date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Blog>);
  static copyOf(source: Blog, mutator: (draft: MutableModel<Blog>) => MutableModel<Blog> | void): Blog;
}

export declare class DayInLifeItem {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DayInLifeItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly desc: string;
  readonly icon?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly careerDayInLifeId?: string | null;
  constructor(init: ModelInit<DayInLifeItem>);
  static copyOf(source: DayInLifeItem, mutator: (draft: MutableModel<DayInLifeItem>) => MutableModel<DayInLifeItem> | void): DayInLifeItem;
}

export declare class Career {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Career, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly altName?: string | null;
  readonly subhead?: string | null;
  readonly media?: string | null;
  readonly dayInLife?: (DayInLifeItem | null)[] | null;
  readonly cmpmCopy?: string | null;
  readonly cpsCopy?: string | null;
  readonly apcCopy?: string | null;
  readonly coreCopy?: string | null;
  readonly electiveCopy?: string | null;
  readonly freeCopy?: string | null;
  readonly beverageCopy?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Career>);
  static copyOf(source: Career, mutator: (draft: MutableModel<Career>) => MutableModel<Career> | void): Career;
}

export declare class APS {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<APS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Registrants?: (APSUser | null)[] | null;
  readonly Sponsors?: (APSSponsor | null)[] | null;
  readonly Speakers?: (APSSpeaker | null)[] | null;
  readonly year: number;
  readonly codes?: (RegistrationCode | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<APS>);
  static copyOf(source: APS, mutator: (draft: MutableModel<APS>) => MutableModel<APS> | void): APS;
}

export declare class User {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly title?: string | null;
  readonly company?: string | null;
  readonly email: string;
  readonly office?: string | null;
  readonly cell?: string | null;
  readonly picture?: string | null;
  readonly linkedin?: string | null;
  readonly companyID?: string | null;
  readonly apss?: (APSUser | null)[] | null;
  readonly cmpmFormID?: string | null;
  readonly cmpmForm?: CMPMForm | null;
  readonly instructorId?: Instructor | null;
  readonly studentId?: Student | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userInstructorIdId?: string | null;
  readonly userStudentIdId?: string | null;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class CMPMForm {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CMPMForm, 'id'>;
    readOnlyFields: 'createdOn' | 'updatedOn';
  };
  readonly id: string;
  readonly user: User;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email: string;
  readonly phone?: string | null;
  readonly streetAddress?: string | null;
  readonly addressExtra?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly country?: string | null;
  readonly companyName?: string | null;
  readonly companyTitle?: string | null;
  readonly linkedin?: string | null;
  readonly background?: string | null;
  readonly whyPackaging?: string | null;
  readonly areaOfInterest?: string | null;
  readonly sessionApplying?: string | null;
  readonly referral?: string | null;
  readonly payment?: string | null;
  readonly yearGoals?: string | null;
  readonly cmpmGoals?: string | null;
  readonly moreAboutYou?: string | null;
  readonly createdOn?: string | null;
  readonly updatedOn?: string | null;
  readonly cMPMFormUserId: string;
  constructor(init: ModelInit<CMPMForm>);
  static copyOf(source: CMPMForm, mutator: (draft: MutableModel<CMPMForm>) => MutableModel<CMPMForm> | void): CMPMForm;
}

export declare class Instructor {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Instructor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly instructor: User;
  readonly coursesTaught?: (CourseInstructors | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Instructor>);
  static copyOf(source: Instructor, mutator: (draft: MutableModel<Instructor>) => MutableModel<Instructor> | void): Instructor;
}

export declare class LMSCourse {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LMSCourse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly courseId?: string | null;
  readonly Cirriculum?: (CirriculumCourses | null)[] | null;
  readonly Lessons?: (CourseLessons | null)[] | null;
  readonly Instructors?: (CourseInstructors | null)[] | null;
  readonly price?: number | null;
  readonly hours?: number | null;
  readonly videos?: number | null;
  readonly seoImage?: string | null;
  readonly description?: string | null;
  readonly percentComplete?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly studentCourseEnrolledId?: string | null;
  constructor(init: ModelInit<LMSCourse>);
  static copyOf(source: LMSCourse, mutator: (draft: MutableModel<LMSCourse>) => MutableModel<LMSCourse> | void): LMSCourse;
}

export declare class LMSCirriculum {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LMSCirriculum, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly Courses?: (CirriculumCourses | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<LMSCirriculum>);
  static copyOf(source: LMSCirriculum, mutator: (draft: MutableModel<LMSCirriculum>) => MutableModel<LMSCirriculum> | void): LMSCirriculum;
}

export declare class LMSLesson {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LMSLesson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly Course?: (CourseLessons | null)[] | null;
  readonly subheadline?: string | null;
  readonly objectives?: (Objective | null)[] | null;
  readonly mediaType?: MediaType | keyof typeof MediaType | null;
  readonly slides?: (Slide | null)[] | null;
  readonly video?: LessonVideo | null;
  readonly percentComplete?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly lMSLessonVideoId?: string | null;
  constructor(init: ModelInit<LMSLesson>);
  static copyOf(source: LMSLesson, mutator: (draft: MutableModel<LMSLesson>) => MutableModel<LMSLesson> | void): LMSLesson;
}

export declare class Objective {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Objective, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly objective: string;
  readonly completed?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly lMSLessonObjectivesId?: string | null;
  constructor(init: ModelInit<Objective>);
  static copyOf(source: Objective, mutator: (draft: MutableModel<Objective>) => MutableModel<Objective> | void): Objective;
}

export declare class Slide {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Slide, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly slideSource: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly lMSLessonSlidesId?: string | null;
  constructor(init: ModelInit<Slide>);
  static copyOf(source: Slide, mutator: (draft: MutableModel<Slide>) => MutableModel<Slide> | void): Slide;
}

export declare class LessonVideo {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LessonVideo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly timestamps?: (Timestamp | null)[] | null;
  readonly lessonId?: string | null;
  readonly lesson?: LMSLesson | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<LessonVideo>);
  static copyOf(source: LessonVideo, mutator: (draft: MutableModel<LessonVideo>) => MutableModel<LessonVideo> | void): LessonVideo;
}

export declare class Timestamp {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Timestamp, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly time: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly lessonVideoTimestampsId?: string | null;
  constructor(init: ModelInit<Timestamp>);
  static copyOf(source: Timestamp, mutator: (draft: MutableModel<Timestamp>) => MutableModel<Timestamp> | void): Timestamp;
}

export declare class Student {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Student, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly studentId?: string | null;
  readonly student?: User | null;
  readonly courseEnrolled?: (LMSCourse | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Student>);
  static copyOf(source: Student, mutator: (draft: MutableModel<Student>) => MutableModel<Student> | void): Student;
}

export declare class Company {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Company, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly Employees?: (User | null)[] | null;
  readonly website?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly street_1?: string | null;
  readonly street_2?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly apsID?: (APSSponsor | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Company>);
  static copyOf(source: Company, mutator: (draft: MutableModel<Company>) => MutableModel<Company> | void): Company;
}

export declare class APSSpeaker {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<APSSpeaker, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly company: string;
  readonly title: string;
  readonly phone?: string | null;
  readonly linkedin?: string | null;
  readonly bio: string;
  readonly presentationTitle?: string | null;
  readonly presentationSummary?: string | null;
  readonly headshot: string;
  readonly mediaConsent?: boolean | null;
  readonly privacyConsent?: boolean | null;
  readonly apsHistory?: APS | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly aPSSpeakersId?: string | null;
  constructor(init: ModelInit<APSSpeaker>);
  static copyOf(source: APSSpeaker, mutator: (draft: MutableModel<APSSpeaker>) => MutableModel<APSSpeaker> | void): APSSpeaker;
}

export declare class CertificateCourses {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CertificateCourses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly certificateId?: string | null;
  readonly courseId?: string | null;
  readonly certificate: Certificate;
  readonly course: Course;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CertificateCourses>);
  static copyOf(source: CertificateCourses, mutator: (draft: MutableModel<CertificateCourses>) => MutableModel<CertificateCourses> | void): CertificateCourses;
}

export declare class ArticleRelatedCourses {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ArticleRelatedCourses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly courseId?: string | null;
  readonly articleId?: string | null;
  readonly course: Course;
  readonly article: Article;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ArticleRelatedCourses>);
  static copyOf(source: ArticleRelatedCourses, mutator: (draft: MutableModel<ArticleRelatedCourses>) => MutableModel<ArticleRelatedCourses> | void): ArticleRelatedCourses;
}

export declare class APSUser {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<APSUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly aPSId?: string | null;
  readonly userId?: string | null;
  readonly aps: APS;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<APSUser>);
  static copyOf(source: APSUser, mutator: (draft: MutableModel<APSUser>) => MutableModel<APSUser> | void): APSUser;
}

export declare class APSSponsor {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<APSSponsor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly aPSId?: string | null;
  readonly companyId?: string | null;
  readonly aps: APS;
  readonly company: Company;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<APSSponsor>);
  static copyOf(source: APSSponsor, mutator: (draft: MutableModel<APSSponsor>) => MutableModel<APSSponsor> | void): APSSponsor;
}

export declare class CourseInstructors {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CourseInstructors, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly instructorId?: string | null;
  readonly lMSCourseId?: string | null;
  readonly instructor: Instructor;
  readonly lmsCourse: LMSCourse;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CourseInstructors>);
  static copyOf(source: CourseInstructors, mutator: (draft: MutableModel<CourseInstructors>) => MutableModel<CourseInstructors> | void): CourseInstructors;
}

export declare class CirriculumCourses {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CirriculumCourses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly lMSCourseId?: string | null;
  readonly lMSCirriculumId?: string | null;
  readonly lmsCourse: LMSCourse;
  readonly lmsCirriculum: LMSCirriculum;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CirriculumCourses>);
  static copyOf(source: CirriculumCourses, mutator: (draft: MutableModel<CirriculumCourses>) => MutableModel<CirriculumCourses> | void): CirriculumCourses;
}

export declare class CourseLessons {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CourseLessons, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly lMSCourseId?: string | null;
  readonly lMSLessonId?: string | null;
  readonly lmsCourse: LMSCourse;
  readonly lmsLesson: LMSLesson;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CourseLessons>);
  static copyOf(source: CourseLessons, mutator: (draft: MutableModel<CourseLessons>) => MutableModel<CourseLessons> | void): CourseLessons;
}
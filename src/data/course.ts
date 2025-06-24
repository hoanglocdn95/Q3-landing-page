import { studentEvaluate } from './student-evaluate';

export const courses = [
  {
    id: '1',
    title: {
      vi: 'Khóa PTE Cơ Bản (Nền Tảng 1)',
      en: 'PTE Foundation Achievers 1',
    },
    slug: 'foundation-achievers-1',
    previewSrc: '/images/courses/foundation-achievers-1.png',
    previewAlt: 'Foundation Achievers 1',
    shortDescription: {
      vi: 'Chương trình toàn diện này bao gồm tất cả các khía cạnh của bài kiểm tra, bao gồm nói, viết, nghe và đọc.',
      en: 'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
    },

    comingSoon: true,
    image: {
      desktop: {
        src: '/images/courses/course-banner-desktop.png',
        alt: 'course-banner',
      },
      mobile: {
        src: '/images/courses/course-banner-mobile.png',
        alt: 'course-banner',
      },
    },
    vi: {
      name: 'Lộ Trình Ôn Luyện \nKhóa PTE \nAchievers 1 Kèm 1 ',
      description: 'Dành cho Tất Cả Các Band Điểm',
      courseRoadmap: [
        {
          id: '1',
          title: 'Giai đoạn 1: Test năng lực và tư vấn lộ trình',
          description: [
            'Để bắt đầu lộ trình học tập tại Q3 Language , việc đầu tiên bạn cần thực hiện là làm bài kiểm tra năng lực tiếng Anh.',
            'Quá trình này sẽ giúp đánh giá chính xác trình độ tiếng Anh hiện tại, từ đó giúp bạn xây dựng lộ trình cũng như kế hoạch học tập phù hợp nhất với khả năng.',
          ],
        },
        {
          id: '2',
          title: 'Giai đoạn 2: 10 Buổi Nguyên Âm',
          description: [
            'Tập trung vào 20 nguyên âm và các thì ngữ pháp cơ bản.',
            'Nội dung học được điều chỉnh phù hợp với mục tiêu đã đăng ký, giúp bạn nắm vững cấu trúc ngữ pháp cơ bản và nâng cao khả năng nhấn trọng âm.',
          ],
        },
        {
          id: '3',
          title: 'Giai đoạn 3: 10 Buổi Phụ Âm',
          description: [
            'Tập trung vào 24 phụ âm và các thì ngữ pháp cơ bản.',
            'Giáo viên sẽ lên kế hoạch chi tiết cho từng buổi học, đảm bảo học viên được luyện tập chuyên sâu và đảm bảo bạn có thể phát âm rõ ràng và chính xác.',
          ],
        },
        {
          id: '4',
          title: 'Giai đoạn 4: Đánh giá năng lực',
          description: [
            'Làm và pass bài kiểm tra cuối kì sẽ chuyển tiếp lên Khoá PTE Achievers 30 - 36 - 42',
          ],
        },
      ],
      overview: [
        {
          id: '1',
          title: 'Đầu ra: Chuyển tiếp lên Khoá PTE Achievers 30 - 36 - 42',
        },
        {
          id: '2',
          title: 'Đầu vào: Vượt kiểm tra đầu vào',
        },
        {
          id: '3',
          title: 'Thời lượng học từ 1-3 tháng',
        },
        {
          id: '4',
          title: 'Cam kết chuẩn đầu ra',
        },
      ],
      reasonsToJoin: [
        {
          id: '1',
          title: 'Đang hướng tới mục tiêu PTE 30 đến 50.',
          icon: 'target',
        },
        {
          id: '2',
          title:
            'Phát âm chưa chuẩn, khẩu hình sai và ngữ pháp cơ bản chưa vững khiến bạn khó đạt điểm cao trong phần Speaking và trong giao tiếp.',
          icon: 'graduation-hat',
        },
        {
          id: '3',
          title:
            'Gặp khó với các bài như Repeat Sentence và Write From Dictation do phát âm sai, từ vựng hạn chế và khó nhận diện từ khi nghe.',
          icon: 'passport',
        },
        {
          id: '4',
          title:
            'Cần nâng cao phát âm, củng cố ngữ pháp, mở rộng từ vựng theo chủ đề và cải thiện điểm số để tự tin hơn khi giao tiếp và thi PTE.',
          icon: 'translate',
        },
      ],
      studyDetails: {
        duration: 'Tối đa 3 tháng',
        totalHours: '~ 30 giờ',
        hoursPerSession: 'Tối thiểu 1.5 giờ',
        schedule: 'Lịch học linh hoạt',
      },
      courseFeatures: [
        {
          id: '1',
          number: '01',
          title: 'Linh hoạt',
          description:
            'Thời gian và nội dung học được điều chỉnh hoàn toàn dựa trên mục tiêu cá nhân.',
        },
        {
          id: '2',
          number: '02',
          title: 'Khởi Đầu Vững Chắc',
          description:
            'Bắt đầu từ cơ bản với các kỹ năng phát âm và ngữ pháp, thiết lập nền tảng vững chắc để bạn sẵn sàng chinh phục mọi thử thách trong bài thi PTE.',
        },
        {
          id: '3',
          number: '03',
          title: 'Tương Tác Giáo Viên 1:1',
          description:
            'Học tập trực tiếp với giáo viên trong 24 giờ học, mỗi buổi từ thiểu 1.5 giờ, đảm bảo sự hỗ trợ tốt đa cho từng học viên',
        },
        {
          id: '4',
          number: '04',
          title: 'Hỗ Trợ Sửa Lỗi Cá Nhân',
          description:
            'Mọi lỗi phát âm hay ngữ pháp từ cơ bản đến nâng cao sẽ được giáo viên phát hiện và chỉnh sửa ngay, đảm bảo bạn tự tin hơn mỗi ngày.',
        },
        {
          id: '5',
          number: '05',
          title: 'Master Đề Thi',
          description:
            'Đến với Q3, bạn sẽ trở thành bậc thầy giải đề, sẵn sàng đối mặt với mọi thử thách PTE!',
        },
      ],
      evaluate: studentEvaluate,

      faq: [
        {
          id: '1',
          question: 'Khóa học PTE Academic có những gì?',
          answer:
            'Khóa học bao gồm 24 giờ học trực tiếp 1-1 với giáo viên, tài liệu học tập, bài tập về nhà và các bài kiểm tra định kỳ để đánh giá tiến độ.',
        },
        {
          id: '2',
          question: 'Thời gian học có linh hoạt không?',
          answer:
            'Có, bạn có thể sắp xếp lịch học linh hoạt với giáo viên, mỗi buổi học kéo dài tối thiểu 1.5 giờ.',
        },
        {
          id: '3',
          question: 'Làm sao để đăng ký khóa học?',
          answer:
            'Bạn có thể đăng ký trực tiếp trên website hoặc liên hệ với chúng tôi qua hotline để được tư vấn chi tiết về khóa học phù hợp.',
        },
        {
          id: '4',
          question: 'Có cam kết đầu ra không?',
          answer:
            'Có, chúng tôi cam kết đầu ra dựa trên mục tiêu của bạn và kết quả kiểm tra đầu vào. Chi tiết sẽ được thảo luận trong buổi tư vấn.',
        },
        {
          id: '5',
          question: 'Có bao nhiêu buổi học?',
          answer:
            'Khóa học bao gồm 24 giờ học trực tiếp 1-1 với giáo viên, tài liệu học tập, bài tập về nhà và các bài kiểm tra định kỳ để đánh giá tiến độ.',
        },
      ],
      banner: {
        title: 'Thời gian là vàng!',
        subtitle: 'Đừng để cơ hội đạt target PTE vuột mất!',
        image: {
          src: '/images/courses/banner-registration.png',
          alt: 'Student with books',
        },
      },
    },
    en: {
      name: 'PTE Preparation Roadmap \nAchievers 1-on-1 Course',
      description: 'For All Score Bands',
      courseRoadmap: [
        {
          id: '1',
          title: 'Stage 1: Proficiency Test & Roadmap Consultation',
          description: [
            'To start your learning journey at Q3 Language, the first step is to take an English proficiency test.',
            'This helps accurately assess your current level and allows us to tailor the most suitable study plan and roadmap for your ability.',
          ],
        },
        {
          id: '2',
          title: 'Stage 2: 6 Strategy Sessions',
          description: [
            'Live strategy sessions with teachers, focusing on Listening, Speaking, Reading, and Writing skills.',
            'The content is tailored to your registered goal to help you master the exam structure and question types.',
          ],
        },
        {
          id: '3',
          title: 'Stage 3: 12 Intensive Lessons',
          description: [
            'Lessons dive deeply into each skill: Listening, Speaking, Reading, and Writing.',
            'Teachers will prepare detailed lesson plans to ensure in-depth practice and address specific weaknesses in each skill.',
            'You’ll complete regular exercises and tests for teachers to provide detailed feedback.',
          ],
        },
        {
          id: '4',
          title: 'Stage 4: Final Evaluation',
          description: [
            'Take mock tests with grading so the trainer can review and provide 1-on-1 feedback, correct errors, and help you improve before the real exam.',
          ],
        },
      ],
      overview: [
        {
          id: '1',
          title:
            'Goal: Achieve the score required for your visa, study abroad, or migration plans.',
        },
        { id: '2', title: 'Entry: Pass the placement test' },
        { id: '3', title: 'Course Duration: 1 to 3 months' },
        { id: '4', title: 'Guaranteed outcome commitment' },
      ],
      reasonsToJoin: [
        {
          id: '1',
          title: 'Aiming for a PTE score between 30 and 79',
          icon: 'target',
        },
        {
          id: '2',
          title:
            'Looking for an intensive exam prep course focusing on strategies and skills to maximize scores.',
          icon: 'graduation-hat',
        },
        {
          id: '3',
          title: 'Need a visa for study abroad or immigration',
          icon: 'passport',
        },
        {
          id: '4',
          title:
            'Need to improve pronunciation, fluency, and vocabulary to meet target requirements.',
          icon: 'translate',
        },
      ],
      studyDetails: {
        duration: 'Up to 3 months',
        totalHours: '~ 24 hours',
        hoursPerSession: 'At least 1.5 hours',
        schedule: 'Flexible scheduling',
      },
      courseFeatures: [
        {
          id: '1',
          number: '01',
          title: 'Flexibility',
          description:
            'Timing and course content are fully customized based on your personal goals.',
        },
        {
          id: '2',
          number: '02',
          title: 'Solid Foundation',
          description:
            'Start from the basics with pronunciation and grammar to build a strong foundation for PTE success.',
        },
        {
          id: '3',
          number: '03',
          title: '1-on-1 Teacher Interaction',
          description:
            'Learn directly with a teacher for 24 hours, with each session lasting at least 1.5 hours to ensure maximum support.',
        },
        {
          id: '4',
          number: '04',
          title: 'Personalized Error Correction',
          description:
            'All pronunciation and grammar mistakes, from basic to advanced, will be identified and corrected on the spot.',
        },
        {
          id: '5',
          number: '05',
          title: 'Master the Exam',
          description:
            'At Q3, you’ll become an exam expert, ready to conquer every PTE challenge!',
        },
      ],
      evaluate: studentEvaluate,

      faq: [
        {
          id: '1',
          question: 'What does the PTE Academic course include?',
          answer:
            'It includes 24 hours of 1-on-1 live classes, study materials, homework, and regular assessments.',
        },
        {
          id: '2',
          question: 'Is the study schedule flexible?',
          answer:
            'Yes, you can flexibly arrange your study schedule with the teacher. Each session lasts at least 1.5 hours.',
        },
        {
          id: '3',
          question: 'How do I enroll in the course?',
          answer:
            'You can register directly on the website or contact our hotline for personalized consultation.',
        },
        {
          id: '4',
          question: 'Is there a guaranteed result?',
          answer:
            'Yes, we commit to results based on your goal and entry test performance. This will be discussed during the consultation.',
        },
        {
          id: '5',
          question: 'How many sessions are there?',
          answer:
            'The course includes 24 hours of 1-on-1 live lessons with a teacher, study materials, homework, and periodic assessments.',
        },
      ],
      banner: {
        title: 'Time is Gold!',
        subtitle: 'Don’t let the chance to hit your PTE target slip away!',
        image: {
          src: '/images/courses/banner-registration.png',
          alt: 'Student with books',
        },
      },
    },
  },
  {
    id: '2',
    title: {
      vi: 'Khóa PTE Nâng Cao (Nền Tảng 2)',
      en: 'PTE Advanced Achievers 2',
    },
    slug: 'foundation-achievers-2',
    previewSrc: '/images/courses/foundation-achievers-2.png',
    previewAlt: 'Foundation Achievers 2',
    shortDescription: {
      vi: 'Chương trình toàn diện này bao gồm tất cả các khía cạnh của bài kiểm tra, bao gồm nói, viết, nghe và đọc.',
      en: 'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
    },
    comingSoon: true,
    image: {
      desktop: {
        src: '/images/courses/course-banner-desktop.png',
        alt: 'course-banner',
      },
      mobile: {
        src: '/images/courses/course-banner-mobile.png',
        alt: 'course-banner',
      },
    },
    vi: {
      name: 'Lộ Trình Ôn Luyện \nKhóa Foundation Achievers 2',
      description: 'Dành cho Tất Cả Các Band Điểm',
      courseRoadmap: [
        {
          id: '1',
          title: 'Giai đoạn 1: Test năng lực và tư vấn lộ trình',
          description: [
            'Để bắt đầu lộ trình học tập tại Q3 Language , việc đầu tiên bạn cần thực hiện là làm bài kiểm tra năng lực tiếng Anh.',
            'Quá trình này sẽ giúp đánh giá chính xác trình độ tiếng Anh hiện tại, từ đó giúp bạn xây dựng lộ trình cũng như kế hoạch học tập phù hợp nhất với khả năng.',
          ],
        },
        {
          id: '2',
          title: 'Giai đoạn 2: 6 Buổi Tips',
          description: [
            'Các buổi học chiến thuật trực tiếp cùng giáo viên, tập trung vào các kỹ năng Nghe - Nói - Đọc - Viết.',
            'Nội dung học được điều chỉnh phù hợp với mục tiêu đã đăng ký, giúp bạn nắm vững cấu trúc đề thi và kỹ năng xử lý từng dạng bài.',
          ],
        },
        {
          id: '3',
          title: 'Giai đoạn 3: 12 Buổi Chuyên Sâu',
          description: [
            'Các buổi học tập trung chuyên sâu vào từng kỹ năng Nghe - Nói - Đọc - Viết.',
            'Giáo viên sẽ lên kế hoạch chi tiết cho từng buổi học, đảm bảo học viên được luyện tập chuyên sâu và khắc phục những điểm yếu cụ thể ở từng kỹ năng Nghe - Nói - Đọc - Viết.',
            'Học viên sẽ ôn luyện và làm bài kiểm tra định kỳ để thầy cô có thể đánh giá và đưa ra phản hồi chi tiết.',
          ],
        },
        {
          id: '4',
          title: 'Giai đoạn 4: Đánh giá năng lực',
          description: [
            'Làm mock tests thi thử có chấm điểm để Trainer đánh giá và review 1-1, chỉnh sửa từng chỗ sai và cách cải thiện trước khi thi thật.',
          ],
        },
      ],
      overview: [
        {
          id: '1',
          title:
            'Đầu ra: Đạt điểm số phù hợp với Visa hoặc mục đích du học, định cư',
        },
        {
          id: '2',
          title: 'Đầu vào: Vượt kiểm tra đầu vào',
        },
        {
          id: '3',
          title: 'Thời lượng học từ 1-3 tháng',
        },
        {
          id: '4',
          title: 'Cam kết chuẩn đầu ra',
        },
      ],
      reasonsToJoin: [
        {
          id: '1',
          title: 'Đang hướng tới mục tiêu PTE 30 đến 79',
          icon: 'target',
        },
        {
          id: '2',
          title:
            'Tìm kiếm một khóa học luyện thi cấp tốc, nội dung chuyên sâu tập trung vào chiến thuật và kỹ năng làm bài để đạt điểm cao.',
          icon: 'graduation-hat',
        },
        {
          id: '3',
          title: 'Bạn đang cần visa cho các mục đích đi du học hoặc định cư',
          icon: 'passport',
        },
        {
          id: '4',
          title:
            'Cần cải thiện phát âm, độ trôi chảy và vốn từ vựng của mình do chưa đáp ứng được yêu cầu mục tiêu đề ra.',
          icon: 'translate',
        },
      ],
      studyDetails: {
        duration: 'Tối đa 3 tháng',
        totalHours: '~ 24 giờ',
        hoursPerSession: 'Tối thiểu 1.5 giờ',
        schedule: 'Lịch học linh hoạt',
      },
      courseFeatures: [
        {
          id: '1',
          number: '01',
          title: 'Linh hoạt',
          description:
            'Thời gian và nội dung học được điều chỉnh hoàn toàn dựa trên mục tiêu cá nhân.',
        },
        {
          id: '2',
          number: '02',
          title: 'Khởi Đầu Vững Chắc',
          description:
            'Bắt đầu từ cơ bản với các kỹ năng phát âm và ngữ pháp, thiết lập nền tảng vững chắc để bạn sẵn sàng chinh phục mọi thử thách trong bài thi PTE.',
        },
        {
          id: '3',
          number: '03',
          title: 'Tương Tác Giáo Viên 1:1',
          description:
            'Học tập trực tiếp với giáo viên trong 24 giờ học, mỗi buổi từ thiểu 1.5 giờ, đảm bảo sự hỗ trợ tốt đa cho từng học viên',
        },
        {
          id: '4',
          number: '04',
          title: 'Hỗ Trợ Sửa Lỗi Cá Nhân',
          description:
            'Mọi lỗi phát âm hay ngữ pháp từ cơ bản đến nâng cao sẽ được giáo viên phát hiện và chỉnh sửa ngay, đảm bảo bạn tự tin hơn mỗi ngày.',
        },
        {
          id: '5',
          number: '05',
          title: 'Master Đề Thi',
          description:
            'Đến với Q3s, bạn sẽ trở thành bậc thầy giải đề, sẵn sàng đối mặt với mọi thử thách PTE!',
        },
      ],
      evaluate: studentEvaluate,

      faq: [
        {
          id: '1',
          question: 'Khóa học PTE Academic có những gì?',
          answer:
            'Khóa học bao gồm 24 giờ học trực tiếp 1-1 với giáo viên, tài liệu học tập, bài tập về nhà và các bài kiểm tra định kỳ để đánh giá tiến độ.',
        },
        {
          id: '2',
          question: 'Thời gian học có linh hoạt không?',
          answer:
            'Có, bạn có thể sắp xếp lịch học linh hoạt với giáo viên, mỗi buổi học kéo dài tối thiểu 1.5 giờ.',
        },
        {
          id: '3',
          question: 'Làm sao để đăng ký khóa học?',
          answer:
            'Bạn có thể đăng ký trực tiếp trên website hoặc liên hệ với chúng tôi qua hotline để được tư vấn chi tiết về khóa học phù hợp.',
        },
        {
          id: '4',
          question: 'Có cam kết đầu ra không?',
          answer:
            'Có, chúng tôi cam kết đầu ra dựa trên mục tiêu của bạn và kết quả kiểm tra đầu vào. Chi tiết sẽ được thảo luận trong buổi tư vấn.',
        },
        {
          id: '5',
          question: 'Có bao nhiêu buổi học?',
          answer:
            'Khóa học bao gồm 24 giờ học trực tiếp 1-1 với giáo viên, tài liệu học tập, bài tập về nhà và các bài kiểm tra định kỳ để đánh giá tiến độ.',
        },
      ],
      banner: {
        title: 'Thời gian là vàng!',
        subtitle: 'Đừng để cơ hội đạt target PTE vuột mất!',
        image: {
          src: '/images/courses/banner-registration.png',
          alt: 'Student with books',
        },
      },
    },
    en: {
      name: 'PTE Preparation Roadmap \nAchievers 1-on-1 Course',
      description: 'For All Score Bands',
      courseRoadmap: [
        {
          id: '1',
          title: 'Stage 1: Proficiency Test & Roadmap Consultation',
          description: [
            'To start your learning journey at Q3 Language, the first step is to take an English proficiency test.',
            'This helps accurately assess your current level and allows us to tailor the most suitable study plan and roadmap for your ability.',
          ],
        },
        {
          id: '2',
          title: 'Stage 2: 6 Strategy Sessions',
          description: [
            'Live strategy sessions with teachers, focusing on Listening, Speaking, Reading, and Writing skills.',
            'The content is tailored to your registered goal to help you master the exam structure and question types.',
          ],
        },
        {
          id: '3',
          title: 'Stage 3: 12 Intensive Lessons',
          description: [
            'Lessons dive deeply into each skill: Listening, Speaking, Reading, and Writing.',
            'Teachers will prepare detailed lesson plans to ensure in-depth practice and address specific weaknesses in each skill.',
            'You’ll complete regular exercises and tests for teachers to provide detailed feedback.',
          ],
        },
        {
          id: '4',
          title: 'Stage 4: Final Evaluation',
          description: [
            'Take mock tests with grading so the trainer can review and provide 1-on-1 feedback, correct errors, and help you improve before the real exam.',
          ],
        },
      ],
      overview: [
        {
          id: '1',
          title:
            'Goal: Achieve the score required for your visa, study abroad, or migration plans.',
        },
        { id: '2', title: 'Entry: Pass the placement test' },
        { id: '3', title: 'Course Duration: 1 to 3 months' },
        { id: '4', title: 'Guaranteed outcome commitment' },
      ],
      reasonsToJoin: [
        {
          id: '1',
          title: 'Aiming for a PTE score between 30 and 79',
          icon: 'target',
        },
        {
          id: '2',
          title:
            'Looking for an intensive exam prep course focusing on strategies and skills to maximize scores.',
          icon: 'graduation-hat',
        },
        {
          id: '3',
          title: 'Need a visa for study abroad or immigration',
          icon: 'passport',
        },
        {
          id: '4',
          title:
            'Need to improve pronunciation, fluency, and vocabulary to meet target requirements.',
          icon: 'translate',
        },
      ],
      studyDetails: {
        duration: 'Up to 3 months',
        totalHours: '~ 24 hours',
        hoursPerSession: 'At least 1.5 hours',
        schedule: 'Flexible scheduling',
      },
      courseFeatures: [
        {
          id: '1',
          number: '01',
          title: 'Flexibility',
          description:
            'Timing and course content are fully customized based on your personal goals.',
        },
        {
          id: '2',
          number: '02',
          title: 'Solid Foundation',
          description:
            'Start from the basics with pronunciation and grammar to build a strong foundation for PTE success.',
        },
        {
          id: '3',
          number: '03',
          title: '1-on-1 Teacher Interaction',
          description:
            'Learn directly with a teacher for 24 hours, with each session lasting at least 1.5 hours to ensure maximum support.',
        },
        {
          id: '4',
          number: '04',
          title: 'Personalized Error Correction',
          description:
            'All pronunciation and grammar mistakes, from basic to advanced, will be identified and corrected on the spot.',
        },
        {
          id: '5',
          number: '05',
          title: 'Master the Exam',
          description:
            'At Q3, you’ll become an exam expert, ready to conquer every PTE challenge!',
        },
      ],
      evaluate: studentEvaluate,

      faq: [
        {
          id: '1',
          question: 'What does the PTE Academic course include?',
          answer:
            'It includes 24 hours of 1-on-1 live classes, study materials, homework, and regular assessments.',
        },
        {
          id: '2',
          question: 'Is the study schedule flexible?',
          answer:
            'Yes, you can flexibly arrange your study schedule with the teacher. Each session lasts at least 1.5 hours.',
        },
        {
          id: '3',
          question: 'How do I enroll in the course?',
          answer:
            'You can register directly on the website or contact our hotline for personalized consultation.',
        },
        {
          id: '4',
          question: 'Is there a guaranteed result?',
          answer:
            'Yes, we commit to results based on your goal and entry test performance. This will be discussed during the consultation.',
        },
        {
          id: '5',
          question: 'How many sessions are there?',
          answer:
            'The course includes 24 hours of 1-on-1 live lessons with a teacher, study materials, homework, and periodic assessments.',
        },
      ],
      banner: {
        title: 'Time is Gold!',
        subtitle: 'Don’t let the chance to hit your PTE target slip away!',
        image: {
          src: '/images/courses/banner-registration.png',
          alt: 'Student with books',
        },
      },
    },
  },
  {
    id: '3',
    title: {
      vi: 'Khóa PTE 30-36-42',
      en: 'PTE Achievers 30-36-42',
    },
    slug: 'pte-achievers-30-36-42',
    previewSrc: '/images/courses/pte-achievers-30-36-42.png',
    previewAlt: 'PTE Achievers 30-36-42',
    shortDescription: {
      vi: 'Chương trình toàn diện này bao gồm tất cả các khía cạnh của bài kiểm tra, bao gồm nói, viết, nghe và đọc.',
      en: 'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
    },
    comingSoon: true,
    image: {
      desktop: {
        src: '/images/courses/course-banner-desktop.png',
        alt: 'course-banner',
      },
      mobile: {
        src: '/images/courses/course-banner-mobile.png',
        alt: 'course-banner',
      },
    },
    vi: {
      name: 'Lộ Trình Ôn Luyện \nKhóa PTE \nPTE Achievers 30-36-42',
      description: 'Dành cho Tất Cả Các Band Điểm',
      courseRoadmap: [
        {
          id: '1',
          title: 'Giai đoạn 1: Test năng lực và tư vấn lộ trình',
          description: [
            'Để bắt đầu lộ trình học tập tại Q3 Language , việc đầu tiên bạn cần thực hiện là làm bài kiểm tra năng lực tiếng Anh.',
            'Quá trình này sẽ giúp đánh giá chính xác trình độ tiếng Anh hiện tại, từ đó giúp bạn xây dựng lộ trình cũng như kế hoạch học tập phù hợp nhất với khả năng.',
          ],
        },
        {
          id: '2',
          title: 'Giai đoạn 2: 6 Buổi Tips',
          description: [
            'Các buổi học chiến thuật trực tiếp cùng giáo viên, tập trung vào các kỹ năng Nghe - Nói - Đọc - Viết.',
            'Nội dung học được điều chỉnh phù hợp với mục tiêu đã đăng ký, giúp bạn nắm vững cấu trúc đề thi và kỹ năng xử lý từng dạng bài.',
          ],
        },
        {
          id: '3',
          title: 'Giai đoạn 3: 12 Buổi Chuyên Sâu',
          description: [
            'Các buổi học tập trung chuyên sâu vào từng kỹ năng Nghe - Nói - Đọc - Viết.',
            'Giáo viên sẽ lên kế hoạch chi tiết cho từng buổi học, đảm bảo học viên được luyện tập chuyên sâu và khắc phục những điểm yếu cụ thể ở từng kỹ năng Nghe - Nói - Đọc - Viết.',
            'Học viên sẽ ôn luyện và làm bài kiểm tra định kỳ để thầy cô có thể đánh giá và đưa ra phản hồi chi tiết.',
          ],
        },
        {
          id: '4',
          title: 'Giai đoạn 4: Đánh giá năng lực',
          description: [
            'Làm mock tests thi thử có chấm điểm để Trainer đánh giá và review 1-1, chỉnh sửa từng chỗ sai và cách cải thiện trước khi thi thật.',
          ],
        },
      ],
      overview: [
        {
          id: '1',
          title: 'Đầu ra: PTE 30 - 36 -42',
        },
        {
          id: '2',
          title:
            'Đầu vào: Vượt kiểm tra đầu vào hoặc có chứng chỉ tương đương PTE30',
        },
        {
          id: '3',
          title: 'Thời lượng học từ 1-6 tháng',
        },
        {
          id: '4',
          title: 'Cam kết chuẩn đầu ra',
        },
      ],
      reasonsToJoin: [
        {
          id: '1',
          title: 'Đang hướng tới mục tiêu PTE 30 đến 42',
          icon: 'target',
        },
        {
          id: '2',
          title:
            'Tìm kiếm một khóa học luyện thi cấp tốc, nội dung chuyên sâu tập trung vào chiến thuật và kỹ năng làm bài để đạt điểm cao.',
          icon: 'graduation-hat',
        },
        {
          id: '3',
          title:
            'Bạn đang cần visa du học nghề 500, đi nước ngoài theo diện bảo lãnh và cần visa 482 hoặc đang là du học sinh cần chứng chỉ theo yêu cầu của trường',
          icon: 'passport',
        },
        {
          id: '4',
          title:
            'Cần cải thiện phát âm, độ trôi chảy và vốn từ vựng của mình do chưa đáp ứng được yêu cầu mục tiêu đề ra.',
          icon: 'translate',
        },
      ],
      studyDetails: {
        duration: 'Tối đa 3 tháng',
        totalHours: '~ 24 giờ',
        hoursPerSession: 'Tối thiểu 1.5 giờ',
        schedule: 'Lịch học linh hoạt',
      },
      courseFeatures: [
        {
          id: '1',
          number: '01',
          title: 'Linh hoạt',
          description:
            'Thời gian và nội dung học được điều chỉnh hoàn toàn dựa trên mục tiêu cá nhân.',
        },
        {
          id: '2',
          number: '02',
          title: 'Khởi Đầu Vững Chắc',
          description:
            'Bắt đầu từ cơ bản với các kỹ năng phát âm và ngữ pháp, thiết lập nền tảng vững chắc để bạn sẵn sàng chinh phục mọi thử thách trong bài thi PTE.',
        },
        {
          id: '3',
          number: '03',
          title: 'Tương Tác Giáo Viên 1:1',
          description:
            'Học tập trực tiếp với giáo viên trong 24 giờ học, mỗi buổi từ thiểu 1.5 giờ, đảm bảo sự hỗ trợ tốt đa cho từng học viên',
        },
        {
          id: '4',
          number: '04',
          title: 'Hỗ Trợ Sửa Lỗi Cá Nhân',
          description:
            'Mọi lỗi phát âm hay ngữ pháp từ cơ bản đến nâng cao sẽ được giáo viên phát hiện và chỉnh sửa ngay, đảm bảo bạn tự tin hơn mỗi ngày.',
        },
        {
          id: '5',
          number: '05',
          title: 'Master Đề Thi',
          description:
            'Đến với Q3s, bạn sẽ trở thành bậc thầy giải đề, sẵn sàng đối mặt với mọi thử thách PTE!',
        },
      ],
      evaluate: studentEvaluate,

      faq: [
        {
          id: '1',
          question: 'Khóa học PTE Academic có những gì?',
          answer:
            'Khóa học bao gồm 24 giờ học trực tiếp 1-1 với giáo viên, tài liệu học tập, bài tập về nhà và các bài kiểm tra định kỳ để đánh giá tiến độ.',
        },
        {
          id: '2',
          question: 'Thời gian học có linh hoạt không?',
          answer:
            'Có, bạn có thể sắp xếp lịch học linh hoạt với giáo viên, mỗi buổi học kéo dài tối thiểu 1.5 giờ.',
        },
        {
          id: '3',
          question: 'Làm sao để đăng ký khóa học?',
          answer:
            'Bạn có thể đăng ký trực tiếp trên website hoặc liên hệ với chúng tôi qua hotline để được tư vấn chi tiết về khóa học phù hợp.',
        },
        {
          id: '4',
          question: 'Có cam kết đầu ra không?',
          answer:
            'Có, chúng tôi cam kết đầu ra dựa trên mục tiêu của bạn và kết quả kiểm tra đầu vào. Chi tiết sẽ được thảo luận trong buổi tư vấn.',
        },
        {
          id: '5',
          question: 'Có bao nhiêu buổi học?',
          answer:
            'Khóa học bao gồm 24 giờ học trực tiếp 1-1 với giáo viên, tài liệu học tập, bài tập về nhà và các bài kiểm tra định kỳ để đánh giá tiến độ.',
        },
      ],
      banner: {
        title: 'Thời gian là vàng!',
        subtitle: 'Đừng để cơ hội đạt target PTE vuột mất!',
        image: {
          src: '/images/courses/banner-registration.png',
          alt: 'Student with books',
        },
      },
    },
    en: {
      name: 'Lộ Trình Ôn Luyện \nKhóa PTE \nPTE Achievers 30-36-42',
      description: 'Dành cho Tất Cả Các Band Điểm',
      courseRoadmap: [
        {
          id: '1',
          title: 'Giai đoạn 1: Test năng lực và tư vấn lộ trình',
          description: [
            'Để bắt đầu lộ trình học tập tại Q3 Language , việc đầu tiên bạn cần thực hiện là làm bài kiểm tra năng lực tiếng Anh.',
            'Quá trình này sẽ giúp đánh giá chính xác trình độ tiếng Anh hiện tại, từ đó giúp bạn xây dựng lộ trình cũng như kế hoạch học tập phù hợp nhất với khả năng.',
          ],
        },
        {
          id: '2',
          title: 'Giai đoạn 2: 6 Buổi Tips',
          description: [
            'Các buổi học chiến thuật trực tiếp cùng giáo viên, tập trung vào các kỹ năng Nghe - Nói - Đọc - Viết.',
            'Nội dung học được điều chỉnh phù hợp với mục tiêu đã đăng ký, giúp bạn nắm vững cấu trúc đề thi và kỹ năng xử lý từng dạng bài.',
          ],
        },
        {
          id: '3',
          title: 'Giai đoạn 3: 12 Buổi Chuyên Sâu',
          description: [
            'Các buổi học tập trung chuyên sâu vào từng kỹ năng Nghe - Nói - Đọc - Viết.',
            'Giáo viên sẽ lên kế hoạch chi tiết cho từng buổi học, đảm bảo học viên được luyện tập chuyên sâu và khắc phục những điểm yếu cụ thể ở từng kỹ năng Nghe - Nói - Đọc - Viết.',
            'Học viên sẽ ôn luyện và làm bài kiểm tra định kỳ để thầy cô có thể đánh giá và đưa ra phản hồi chi tiết.',
          ],
        },
        {
          id: '4',
          title: 'Giai đoạn 4: Đánh giá năng lực',
          description: [
            'Làm mock tests thi thử có chấm điểm để Trainer đánh giá và review 1-1, chỉnh sửa từng chỗ sai và cách cải thiện trước khi thi thật.',
          ],
        },
      ],
      overview: [
        {
          id: '1',
          title:
            'Đầu ra: Đạt điểm số phù hợp với Visa hoặc mục đích du học, định cư',
        },
        {
          id: '2',
          title: 'Đầu vào: Vượt kiểm tra đầu vào',
        },
        {
          id: '3',
          title: 'Thời lượng học từ 1-3 tháng',
        },
        {
          id: '4',
          title: 'Cam kết chuẩn đầu ra',
        },
      ],
      reasonsToJoin: [
        {
          id: '1',
          title: 'Đang hướng tới mục tiêu PTE 30 đến 79',
          icon: 'target',
        },
        {
          id: '2',
          title:
            'Tìm kiếm một khóa học luyện thi cấp tốc, nội dung chuyên sâu tập trung vào chiến thuật và kỹ năng làm bài để đạt điểm cao.',
          icon: 'graduation-hat',
        },
        {
          id: '3',
          title: 'Bạn đang cần visa cho các mục đích đi du học hoặc định cư',
          icon: 'passport',
        },
        {
          id: '4',
          title:
            'Cần cải thiện phát âm, độ trôi chảy và vốn từ vựng của mình do chưa đáp ứng được yêu cầu mục tiêu đề ra.',
          icon: 'translate',
        },
      ],
      studyDetails: {
        duration: 'Tối đa 3 tháng',
        totalHours: '~ 24 giờ',
        hoursPerSession: 'Tối thiểu 1.5 giờ',
        schedule: 'Lịch học linh hoạt',
      },
      courseFeatures: [
        {
          id: '1',
          number: '01',
          title: 'Linh hoạt',
          description:
            'Thời gian và nội dung học được điều chỉnh hoàn toàn dựa trên mục tiêu cá nhân.',
        },
        {
          id: '2',
          number: '02',
          title: 'Khởi Đầu Vững Chắc',
          description:
            'Bắt đầu từ cơ bản với các kỹ năng phát âm và ngữ pháp, thiết lập nền tảng vững chắc để bạn sẵn sàng chinh phục mọi thử thách trong bài thi PTE.',
        },
        {
          id: '3',
          number: '03',
          title: 'Tương Tác Giáo Viên 1:1',
          description:
            'Học tập trực tiếp với giáo viên trong 24 giờ học, mỗi buổi từ thiểu 1.5 giờ, đảm bảo sự hỗ trợ tốt đa cho từng học viên',
        },
        {
          id: '4',
          number: '04',
          title: 'Hỗ Trợ Sửa Lỗi Cá Nhân',
          description:
            'Mọi lỗi phát âm hay ngữ pháp từ cơ bản đến nâng cao sẽ được giáo viên phát hiện và chỉnh sửa ngay, đảm bảo bạn tự tin hơn mỗi ngày.',
        },
        {
          id: '5',
          number: '05',
          title: 'Master Đề Thi',
          description:
            'Đến với Q3s, bạn sẽ trở thành bậc thầy giải đề, sẵn sàng đối mặt với mọi thử thách PTE!',
        },
      ],
      evaluate: studentEvaluate,

      faq: [
        {
          id: '1',
          question: 'Khóa học PTE Academic có những gì?',
          answer:
            'Khóa học bao gồm 24 giờ học trực tiếp 1-1 với giáo viên, tài liệu học tập, bài tập về nhà và các bài kiểm tra định kỳ để đánh giá tiến độ.',
        },
        {
          id: '2',
          question: 'Thời gian học có linh hoạt không?',
          answer:
            'Có, bạn có thể sắp xếp lịch học linh hoạt với giáo viên, mỗi buổi học kéo dài tối thiểu 1.5 giờ.',
        },
        {
          id: '3',
          question: 'Làm sao để đăng ký khóa học?',
          answer:
            'Bạn có thể đăng ký trực tiếp trên website hoặc liên hệ với chúng tôi qua hotline để được tư vấn chi tiết về khóa học phù hợp.',
        },
        {
          id: '4',
          question: 'Có cam kết đầu ra không?',
          answer:
            'Có, chúng tôi cam kết đầu ra dựa trên mục tiêu của bạn và kết quả kiểm tra đầu vào. Chi tiết sẽ được thảo luận trong buổi tư vấn.',
        },
        {
          id: '5',
          question: 'Có bao nhiêu buổi học?',
          answer:
            'Khóa học bao gồm 24 giờ học trực tiếp 1-1 với giáo viên, tài liệu học tập, bài tập về nhà và các bài kiểm tra định kỳ để đánh giá tiến độ.',
        },
      ],
      banner: {
        title: 'Thời gian là vàng!',
        subtitle: 'Đừng để cơ hội đạt target PTE vuột mất!',
        image: {
          src: '/images/courses/banner-registration.png',
          alt: 'Student with books',
        },
      },
    },
  },
  {
    id: '4',
    title: {
      vi: 'Khóa PTE 36-42-50',
      en: 'PTE Achievers 36-42-50',
    },
    slug: 'pte-achievers-36-42-50',
    previewSrc: '/images/courses/pte-achievers-36-42-50.png',
    previewAlt: 'PTE Achievers 36-42-50',
    shortDescription: {
      vi: 'Chương trình toàn diện này bao gồm tất cả các khía cạnh của bài kiểm tra, bao gồm nói, viết, nghe và đọc.',
      en: 'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
    },
    comingSoon: true,
    image: {
      desktop: {
        src: '/images/courses/course-banner-desktop.png',
        alt: 'course-banner',
      },
      mobile: {
        src: '/images/courses/course-banner-mobile.png',
        alt: 'course-banner',
      },
    },
    vi: {
      name: 'Lộ Trình Ôn Luyện \nKhóa PTE \nAchievers 36-42-50 ',
      description: 'Dành cho Tất Cả Các Band Điểm',
      courseRoadmap: [
        {
          id: '1',
          title: 'Giai đoạn 1: Test năng lực và tư vấn lộ trình',
          description: [
            'Để bắt đầu lộ trình học tập tại Q3 Language , việc đầu tiên bạn cần thực hiện là làm bài kiểm tra năng lực tiếng Anh.',
            'Quá trình này sẽ giúp đánh giá chính xác trình độ tiếng Anh hiện tại, từ đó giúp bạn xây dựng lộ trình cũng như kế hoạch học tập phù hợp nhất với khả năng.',
          ],
        },
        {
          id: '2',
          title: 'Giai đoạn 2: 6 Buổi Tips',
          description: [
            'Các buổi học chiến thuật trực tiếp cùng giáo viên, tập trung vào các kỹ năng Nghe - Nói - Đọc - Viết.',
            'Nội dung học được điều chỉnh phù hợp với mục tiêu đã đăng ký, giúp bạn nắm vững cấu trúc đề thi và kỹ năng xử lý từng dạng bài.',
          ],
        },
        {
          id: '3',
          title: 'Giai đoạn 3: 12 Buổi Chuyên Sâu',
          description: [
            'Các buổi học tập trung chuyên sâu vào từng kỹ năng Nghe - Nói - Đọc - Viết.',
            'Giáo viên sẽ lên kế hoạch chi tiết cho từng buổi học, đảm bảo học viên được luyện tập chuyên sâu và khắc phục những điểm yếu cụ thể ở từng kỹ năng Nghe - Nói - Đọc - Viết.',
            'Học viên sẽ ôn luyện và làm bài kiểm tra định kỳ để thầy cô có thể đánh giá và đưa ra phản hồi chi tiết.',
          ],
        },
        {
          id: '4',
          title: 'Giai đoạn 4: Đánh giá năng lực',
          description: [
            'Làm mock tests thi thử có chấm điểm để Trainer đánh giá và review 1-1, chỉnh sửa từng chỗ sai và cách cải thiện trước khi thi thật.',
          ],
        },
      ],
      overview: [
        {
          id: '1',
          title: 'Đầu ra: PTE 36 - 42 - 50',
        },
        {
          id: '2',
          title:
            'Đầu vào: Vượt kiểm tra đầu vào hoặc có chứng chỉ tương đương PTE30',
        },
        {
          id: '3',
          title: 'Thời lượng học từ 1-6 tháng',
        },
        {
          id: '4',
          title: 'Cam kết chuẩn đầu ra',
        },
      ],
      reasonsToJoin: [
        {
          id: '1',
          title: 'Đang hướng tới mục tiêu PTE 36 đến 50',
          icon: 'target',
        },
        {
          id: '2',
          title:
            'Tìm kiếm một khóa học luyện thi cấp tốc, nội dung chuyên sâu tập trung vào chiến thuật và kỹ năng làm bài để đạt điểm cao.',
          icon: 'graduation-hat',
        },
        {
          id: '3',
          title:
            'Bạn đang cần visa du học nghề 500, đi nước ngoài theo diện bảo lãnh và cần visa 482 hoặc đang là du học sinh cần chứng chỉ theo yêu cầu của trường',
          icon: 'passport',
        },
        {
          id: '4',
          title:
            'Cần cải thiện phát âm, độ trôi chảy và vốn từ vựng của mình do chưa đáp ứng được yêu cầu mục tiêu đề ra.',
          icon: 'translate',
        },
      ],
      studyDetails: {
        duration: 'Tối đa 3 tháng',
        totalHours: '~ 20 giờ',
        hoursPerSession: 'Tối thiểu 1.5 giờ',
        schedule: 'Lịch học linh hoạt',
      },
      courseFeatures: [
        {
          id: '1',
          number: '01',
          title: 'Linh hoạt',
          description:
            'Thời gian và nội dung học được điều chỉnh hoàn toàn dựa trên mục tiêu cá nhân.',
        },
        {
          id: '2',
          number: '02',
          title: 'Khởi Đầu Vững Chắc',
          description:
            'Bắt đầu từ cơ bản với các kỹ năng phát âm và ngữ pháp, thiết lập nền tảng vững chắc để bạn sẵn sàng chinh phục mọi thử thách trong bài thi PTE.',
        },
        {
          id: '3',
          number: '03',
          title: 'Tương Tác Giáo Viên 1:1',
          description:
            'Học tập trực tiếp với giáo viên trong 24 giờ học, mỗi buổi từ thiểu 1.5 giờ, đảm bảo sự hỗ trợ tốt đa cho từng học viên',
        },
        {
          id: '4',
          number: '04',
          title: 'Hỗ Trợ Sửa Lỗi Cá Nhân',
          description:
            'Mọi lỗi phát âm hay ngữ pháp từ cơ bản đến nâng cao sẽ được giáo viên phát hiện và chỉnh sửa ngay, đảm bảo bạn tự tin hơn mỗi ngày.',
        },
        {
          id: '5',
          number: '05',
          title: 'Master Đề Thi',
          description:
            'Đến với Q3s, bạn sẽ trở thành bậc thầy giải đề, sẵn sàng đối mặt với mọi thử thách PTE!',
        },
      ],
      evaluate: studentEvaluate,

      faq: [
        {
          id: '1',
          question: 'Khóa học PTE Academic có những gì?',
          answer:
            'Khóa học bao gồm 24 giờ học trực tiếp 1-1 với giáo viên, tài liệu học tập, bài tập về nhà và các bài kiểm tra định kỳ để đánh giá tiến độ.',
        },
        {
          id: '2',
          question: 'Thời gian học có linh hoạt không?',
          answer:
            'Có, bạn có thể sắp xếp lịch học linh hoạt với giáo viên, mỗi buổi học kéo dài tối thiểu 1.5 giờ.',
        },
        {
          id: '3',
          question: 'Làm sao để đăng ký khóa học?',
          answer:
            'Bạn có thể đăng ký trực tiếp trên website hoặc liên hệ với chúng tôi qua hotline để được tư vấn chi tiết về khóa học phù hợp.',
        },
        {
          id: '4',
          question: 'Có cam kết đầu ra không?',
          answer:
            'Có, chúng tôi cam kết đầu ra dựa trên mục tiêu của bạn và kết quả kiểm tra đầu vào. Chi tiết sẽ được thảo luận trong buổi tư vấn.',
        },
        {
          id: '5',
          question: 'Có bao nhiêu buổi học?',
          answer:
            'Khóa học bao gồm 24 giờ học trực tiếp 1-1 với giáo viên, tài liệu học tập, bài tập về nhà và các bài kiểm tra định kỳ để đánh giá tiến độ.',
        },
      ],
      banner: {
        title: 'Thời gian là vàng!',
        subtitle: 'Đừng để cơ hội đạt target PTE vuột mất!',
        image: {
          src: '/images/courses/banner-registration.png',
          alt: 'Student with books',
        },
      },
    },
    en: {
      name: 'PTE Preparation Roadmap \nAchievers 1-on-1 Course',
      description: 'For All Score Bands',
      courseRoadmap: [
        {
          id: '1',
          title: 'Stage 1: Proficiency Test & Roadmap Consultation',
          description: [
            'To start your learning journey at Q3 Language, the first step is to take an English proficiency test.',
            'This helps accurately assess your current level and allows us to tailor the most suitable study plan and roadmap for your ability.',
          ],
        },
        {
          id: '2',
          title: 'Stage 2: 6 Strategy Sessions',
          description: [
            'Live strategy sessions with teachers, focusing on Listening, Speaking, Reading, and Writing skills.',
            'The content is tailored to your registered goal to help you master the exam structure and question types.',
          ],
        },
        {
          id: '3',
          title: 'Stage 3: 12 Intensive Lessons',
          description: [
            'Lessons dive deeply into each skill: Listening, Speaking, Reading, and Writing.',
            'Teachers will prepare detailed lesson plans to ensure in-depth practice and address specific weaknesses in each skill.',
            'You’ll complete regular exercises and tests for teachers to provide detailed feedback.',
          ],
        },
        {
          id: '4',
          title: 'Stage 4: Final Evaluation',
          description: [
            'Take mock tests with grading so the trainer can review and provide 1-on-1 feedback, correct errors, and help you improve before the real exam.',
          ],
        },
      ],
      overview: [
        {
          id: '1',
          title:
            'Goal: Achieve the score required for your visa, study abroad, or migration plans.',
        },
        { id: '2', title: 'Entry: Pass the placement test' },
        { id: '3', title: 'Course Duration: 1 to 3 months' },
        { id: '4', title: 'Guaranteed outcome commitment' },
      ],
      reasonsToJoin: [
        {
          id: '1',
          title: 'Aiming for a PTE score between 30 and 79',
          icon: 'target',
        },
        {
          id: '2',
          title:
            'Looking for an intensive exam prep course focusing on strategies and skills to maximize scores.',
          icon: 'graduation-hat',
        },
        {
          id: '3',
          title: 'Need a visa for study abroad or immigration',
          icon: 'passport',
        },
        {
          id: '4',
          title:
            'Need to improve pronunciation, fluency, and vocabulary to meet target requirements.',
          icon: 'translate',
        },
      ],
      studyDetails: {
        duration: 'Up to 3 months',
        totalHours: '~ 24 hours',
        hoursPerSession: 'At least 1.5 hours',
        schedule: 'Flexible scheduling',
      },
      courseFeatures: [
        {
          id: '1',
          number: '01',
          title: 'Flexibility',
          description:
            'Timing and course content are fully customized based on your personal goals.',
        },
        {
          id: '2',
          number: '02',
          title: 'Solid Foundation',
          description:
            'Start from the basics with pronunciation and grammar to build a strong foundation for PTE success.',
        },
        {
          id: '3',
          number: '03',
          title: '1-on-1 Teacher Interaction',
          description:
            'Learn directly with a teacher for 24 hours, with each session lasting at least 1.5 hours to ensure maximum support.',
        },
        {
          id: '4',
          number: '04',
          title: 'Personalized Error Correction',
          description:
            'All pronunciation and grammar mistakes, from basic to advanced, will be identified and corrected on the spot.',
        },
        {
          id: '5',
          number: '05',
          title: 'Master the Exam',
          description:
            'At Q3, you’ll become an exam expert, ready to conquer every PTE challenge!',
        },
      ],
      evaluate: studentEvaluate,

      faq: [
        {
          id: '1',
          question: 'What does the PTE Academic course include?',
          answer:
            'It includes 24 hours of 1-on-1 live classes, study materials, homework, and regular assessments.',
        },
        {
          id: '2',
          question: 'Is the study schedule flexible?',
          answer:
            'Yes, you can flexibly arrange your study schedule with the teacher. Each session lasts at least 1.5 hours.',
        },
        {
          id: '3',
          question: 'How do I enroll in the course?',
          answer:
            'You can register directly on the website or contact our hotline for personalized consultation.',
        },
        {
          id: '4',
          question: 'Is there a guaranteed result?',
          answer:
            'Yes, we commit to results based on your goal and entry test performance. This will be discussed during the consultation.',
        },
        {
          id: '5',
          question: 'How many sessions are there?',
          answer:
            'The course includes 24 hours of 1-on-1 live lessons with a teacher, study materials, homework, and periodic assessments.',
        },
      ],
      banner: {
        title: 'Time is Gold!',
        subtitle: 'Don’t let the chance to hit your PTE target slip away!',
        image: {
          src: '/images/courses/banner-registration.png',
          alt: 'Student with books',
        },
      },
    },
  },
  {
    id: '5',
    title: 'PTE Achievers 50-58',
    slug: 'pte-achievers-50-58',
    previewSrc: '/images/courses/pte-achievers-50-58.png',
    previewAlt: 'PTE Achievers 50-58',
    shortDescription: {
      vi: 'Chương trình toàn diện này bao gồm tất cả các khía cạnh của bài kiểm tra, bao gồm nói, viết, nghe và đọc.',
      en: 'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
    },
    comingSoon: true,
    image: {
      desktop: {
        src: '/images/courses/course-banner-desktop.png',
        alt: 'course-banner',
      },
      mobile: {
        src: '/images/courses/course-banner-mobile.png',
        alt: 'course-banner',
      },
    },
    vi: {
      name: 'Lộ Trình Ôn Luyện \nKhóa PTE \nAchievers 50-58 ',
      description: 'Dành cho Tất Cả Các Band Điểm',
      courseRoadmap: [
        {
          id: '1',
          title: 'Giai đoạn 1: Test năng lực và tư vấn lộ trình',
          description: [
            'Để bắt đầu lộ trình học tập tại Q3 Language , việc đầu tiên bạn cần thực hiện là làm bài kiểm tra năng lực tiếng Anh.',
            'Quá trình này sẽ giúp đánh giá chính xác trình độ tiếng Anh hiện tại, từ đó giúp bạn xây dựng lộ trình cũng như kế hoạch học tập phù hợp nhất với khả năng.',
          ],
        },
        {
          id: '2',
          title: 'Giai đoạn 2: 6 Buổi Tips',
          description: [
            'Các buổi học chiến thuật trực tiếp cùng giáo viên, tập trung vào các kỹ năng Nghe - Nói - Đọc - Viết.',
            'Nội dung học được điều chỉnh phù hợp với mục tiêu đã đăng ký, giúp bạn nắm vững cấu trúc đề thi và kỹ năng xử lý từng dạng bài.',
          ],
        },
        {
          id: '3',
          title: 'Giai đoạn 3: 12 Buổi Chuyên Sâu',
          description: [
            'Các buổi học tập trung chuyên sâu vào từng kỹ năng Nghe - Nói - Đọc - Viết.',
            'Giáo viên sẽ lên kế hoạch chi tiết cho từng buổi học, đảm bảo học viên được luyện tập chuyên sâu và khắc phục những điểm yếu cụ thể ở từng kỹ năng Nghe - Nói - Đọc - Viết.',
            'Học viên sẽ ôn luyện và làm bài kiểm tra định kỳ để thầy cô có thể đánh giá và đưa ra phản hồi chi tiết.',
          ],
        },
        {
          id: '4',
          title: 'Giai đoạn 4: Đánh giá năng lực',
          description: [
            'Làm mock tests thi thử có chấm điểm để Trainer đánh giá và review 1-1, chỉnh sửa từng chỗ sai và cách cải thiện trước khi thi thật.',
          ],
        },
      ],
      overview: [
        {
          id: '1',
          title:
            'Đầu ra: Đạt điểm số phù hợp với Visa hoặc mục đích du học, định cư',
        },
        {
          id: '2',
          title: 'Đầu vào: Vượt kiểm tra đầu vào',
        },
        {
          id: '3',
          title: 'Thời lượng học từ 1-3 tháng',
        },
        {
          id: '4',
          title: 'Cam kết chuẩn đầu ra',
        },
      ],
      reasonsToJoin: [
        {
          id: '1',
          title: 'Đang hướng tới mục tiêu PTE 30 đến 79',
          icon: 'target',
        },
        {
          id: '2',
          title:
            'Tìm kiếm một khóa học luyện thi cấp tốc, nội dung chuyên sâu tập trung vào chiến thuật và kỹ năng làm bài để đạt điểm cao.',
          icon: 'graduation-hat',
        },
        {
          id: '3',
          title: 'Bạn đang cần visa cho các mục đích đi du học hoặc định cư',
          icon: 'passport',
        },
        {
          id: '4',
          title:
            'Cần cải thiện phát âm, độ trôi chảy và vốn từ vựng của mình do chưa đáp ứng được yêu cầu mục tiêu đề ra.',
          icon: 'translate',
        },
      ],
      studyDetails: {
        duration: 'Tối đa 3 tháng',
        totalHours: '~ 24 giờ',
        hoursPerSession: 'Tối thiểu 1.5 giờ',
        schedule: 'Lịch học linh hoạt',
      },
      courseFeatures: [
        {
          id: '1',
          number: '01',
          title: 'Linh hoạt',
          description:
            'Thời gian và nội dung học được điều chỉnh hoàn toàn dựa trên mục tiêu cá nhân.',
        },
        {
          id: '2',
          number: '02',
          title: 'Khởi Đầu Vững Chắc',
          description:
            'Bắt đầu từ cơ bản với các kỹ năng phát âm và ngữ pháp, thiết lập nền tảng vững chắc để bạn sẵn sàng chinh phục mọi thử thách trong bài thi PTE.',
        },
        {
          id: '3',
          number: '03',
          title: 'Tương Tác Giáo Viên 1:1',
          description:
            'Học tập trực tiếp với giáo viên trong 24 giờ học, mỗi buổi từ thiểu 1.5 giờ, đảm bảo sự hỗ trợ tốt đa cho từng học viên',
        },
        {
          id: '4',
          number: '04',
          title: 'Hỗ Trợ Sửa Lỗi Cá Nhân',
          description:
            'Mọi lỗi phát âm hay ngữ pháp từ cơ bản đến nâng cao sẽ được giáo viên phát hiện và chỉnh sửa ngay, đảm bảo bạn tự tin hơn mỗi ngày.',
        },
        {
          id: '5',
          number: '05',
          title: 'Master Đề Thi',
          description:
            'Đến với Q3s, bạn sẽ trở thành bậc thầy giải đề, sẵn sàng đối mặt với mọi thử thách PTE!',
        },
      ],
      evaluate: studentEvaluate,

      faq: [
        {
          id: '1',
          question: 'Khóa học PTE Academic có những gì?',
          answer:
            'Khóa học bao gồm 24 giờ học trực tiếp 1-1 với giáo viên, tài liệu học tập, bài tập về nhà và các bài kiểm tra định kỳ để đánh giá tiến độ.',
        },
        {
          id: '2',
          question: 'Thời gian học có linh hoạt không?',
          answer:
            'Có, bạn có thể sắp xếp lịch học linh hoạt với giáo viên, mỗi buổi học kéo dài tối thiểu 1.5 giờ.',
        },
        {
          id: '3',
          question: 'Làm sao để đăng ký khóa học?',
          answer:
            'Bạn có thể đăng ký trực tiếp trên website hoặc liên hệ với chúng tôi qua hotline để được tư vấn chi tiết về khóa học phù hợp.',
        },
        {
          id: '4',
          question: 'Có cam kết đầu ra không?',
          answer:
            'Có, chúng tôi cam kết đầu ra dựa trên mục tiêu của bạn và kết quả kiểm tra đầu vào. Chi tiết sẽ được thảo luận trong buổi tư vấn.',
        },
        {
          id: '5',
          question: 'Có bao nhiêu buổi học?',
          answer:
            'Khóa học bao gồm 24 giờ học trực tiếp 1-1 với giáo viên, tài liệu học tập, bài tập về nhà và các bài kiểm tra định kỳ để đánh giá tiến độ.',
        },
      ],
      banner: {
        title: 'Thời gian là vàng!',
        subtitle: 'Đừng để cơ hội đạt target PTE vuột mất!',
        image: {
          src: '/images/courses/banner-registration.png',
          alt: 'Student with books',
        },
      },
    },
    en: {
      name: 'PTE Preparation Roadmap \nAchievers 1-on-1 Course',
      description: 'For All Score Bands',
      courseRoadmap: [
        {
          id: '1',
          title: 'Stage 1: Proficiency Test & Roadmap Consultation',
          description: [
            'To start your learning journey at Q3 Language, the first step is to take an English proficiency test.',
            'This helps accurately assess your current level and allows us to tailor the most suitable study plan and roadmap for your ability.',
          ],
        },
        {
          id: '2',
          title: 'Stage 2: 6 Strategy Sessions',
          description: [
            'Live strategy sessions with teachers, focusing on Listening, Speaking, Reading, and Writing skills.',
            'The content is tailored to your registered goal to help you master the exam structure and question types.',
          ],
        },
        {
          id: '3',
          title: 'Stage 3: 12 Intensive Lessons',
          description: [
            'Lessons dive deeply into each skill: Listening, Speaking, Reading, and Writing.',
            'Teachers will prepare detailed lesson plans to ensure in-depth practice and address specific weaknesses in each skill.',
            'You’ll complete regular exercises and tests for teachers to provide detailed feedback.',
          ],
        },
        {
          id: '4',
          title: 'Stage 4: Final Evaluation',
          description: [
            'Take mock tests with grading so the trainer can review and provide 1-on-1 feedback, correct errors, and help you improve before the real exam.',
          ],
        },
      ],
      overview: [
        {
          id: '1',
          title:
            'Goal: Achieve the score required for your visa, study abroad, or migration plans.',
        },
        { id: '2', title: 'Entry: Pass the placement test' },
        { id: '3', title: 'Course Duration: 1 to 3 months' },
        { id: '4', title: 'Guaranteed outcome commitment' },
      ],
      reasonsToJoin: [
        {
          id: '1',
          title: 'Aiming for a PTE score between 30 and 79',
          icon: 'target',
        },
        {
          id: '2',
          title:
            'Looking for an intensive exam prep course focusing on strategies and skills to maximize scores.',
          icon: 'graduation-hat',
        },
        {
          id: '3',
          title: 'Need a visa for study abroad or immigration',
          icon: 'passport',
        },
        {
          id: '4',
          title:
            'Need to improve pronunciation, fluency, and vocabulary to meet target requirements.',
          icon: 'translate',
        },
      ],
      studyDetails: {
        duration: 'Up to 3 months',
        totalHours: '~ 24 hours',
        hoursPerSession: 'At least 1.5 hours',
        schedule: 'Flexible scheduling',
      },
      courseFeatures: [
        {
          id: '1',
          number: '01',
          title: 'Flexibility',
          description:
            'Timing and course content are fully customized based on your personal goals.',
        },
        {
          id: '2',
          number: '02',
          title: 'Solid Foundation',
          description:
            'Start from the basics with pronunciation and grammar to build a strong foundation for PTE success.',
        },
        {
          id: '3',
          number: '03',
          title: '1-on-1 Teacher Interaction',
          description:
            'Learn directly with a teacher for 24 hours, with each session lasting at least 1.5 hours to ensure maximum support.',
        },
        {
          id: '4',
          number: '04',
          title: 'Personalized Error Correction',
          description:
            'All pronunciation and grammar mistakes, from basic to advanced, will be identified and corrected on the spot.',
        },
        {
          id: '5',
          number: '05',
          title: 'Master the Exam',
          description:
            'At Q3, you’ll become an exam expert, ready to conquer every PTE challenge!',
        },
      ],
      evaluate: studentEvaluate,

      faq: [
        {
          id: '1',
          question: 'What does the PTE Academic course include?',
          answer:
            'It includes 24 hours of 1-on-1 live classes, study materials, homework, and regular assessments.',
        },
        {
          id: '2',
          question: 'Is the study schedule flexible?',
          answer:
            'Yes, you can flexibly arrange your study schedule with the teacher. Each session lasts at least 1.5 hours.',
        },
        {
          id: '3',
          question: 'How do I enroll in the course?',
          answer:
            'You can register directly on the website or contact our hotline for personalized consultation.',
        },
        {
          id: '4',
          question: 'Is there a guaranteed result?',
          answer:
            'Yes, we commit to results based on your goal and entry test performance. This will be discussed during the consultation.',
        },
        {
          id: '5',
          question: 'How many sessions are there?',
          answer:
            'The course includes 24 hours of 1-on-1 live lessons with a teacher, study materials, homework, and periodic assessments.',
        },
      ],
      banner: {
        title: 'Time is Gold!',
        subtitle: 'Don’t let the chance to hit your PTE target slip away!',
        image: {
          src: '/images/courses/banner-registration.png',
          alt: 'Student with books',
        },
      },
    },
  },
  {
    id: '6',
    title: {
      vi: 'Khóa PTE 65-73-79',
      en: 'PTE Achievers 65-73-79',
    },
    slug: 'pte-achievers-65-73-79',
    previewSrc: '/images/courses/pte-achievers-65-73-79.png',
    previewAlt: 'PTE Achievers 65-73-79',
    shortDescription: {
      vi: 'Chương trình toàn diện này bao gồm tất cả các khía cạnh của bài kiểm tra, bao gồm nói, viết, nghe và đọc.',
      en: 'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
    },
    comingSoon: true,
    image: {
      desktop: {
        src: '/images/courses/course-banner-desktop.png',
        alt: 'course-banner',
      },
      mobile: {
        src: '/images/courses/course-banner-mobile.png',
        alt: 'course-banner',
      },
    },
    vi: {
      name: 'Lộ Trình Ôn Luyện \nKhóa PTE \nAchievers 65-73-79 ',
      description: 'Dành cho Tất Cả Các Band Điểm',
      courseRoadmap: [
        {
          id: '1',
          title: 'Giai đoạn 1: Test năng lực và tư vấn lộ trình',
          description: [
            'Để bắt đầu lộ trình học tập tại Q3 Language , việc đầu tiên bạn cần thực hiện là làm bài kiểm tra năng lực tiếng Anh.',
            'Quá trình này sẽ giúp đánh giá chính xác trình độ tiếng Anh hiện tại, từ đó giúp bạn xây dựng lộ trình cũng như kế hoạch học tập phù hợp nhất với khả năng.',
          ],
        },
        {
          id: '2',
          title: 'Giai đoạn 2: 6 Buổi Tips',
          description: [
            'Các buổi học chiến thuật trực tiếp cùng giáo viên, tập trung vào các kỹ năng Nghe - Nói - Đọc - Viết.',
            'Nội dung học được điều chỉnh phù hợp với mục tiêu đã đăng ký, giúp bạn nắm vững cấu trúc đề thi và kỹ năng xử lý từng dạng bài.',
          ],
        },
        {
          id: '3',
          title: 'Giai đoạn 3: 12 Buổi Chuyên Sâu',
          description: [
            'Các buổi học tập trung chuyên sâu vào từng kỹ năng Nghe - Nói - Đọc - Viết.',
            'Giáo viên sẽ lên kế hoạch chi tiết cho từng buổi học, đảm bảo học viên được luyện tập chuyên sâu và khắc phục những điểm yếu cụ thể ở từng kỹ năng Nghe - Nói - Đọc - Viết.',
            'Học viên sẽ ôn luyện và làm bài kiểm tra định kỳ để thầy cô có thể đánh giá và đưa ra phản hồi chi tiết.',
          ],
        },
        {
          id: '4',
          title: 'Giai đoạn 4: Đánh giá năng lực',
          description: [
            'Làm mock tests thi thử có chấm điểm để Trainer đánh giá và review 1-1, chỉnh sửa từng chỗ sai và cách cải thiện trước khi thi thật.',
          ],
        },
      ],
      overview: [
        {
          id: '1',
          title:
            'Đầu ra: Đạt điểm số phù hợp với Visa hoặc mục đích du học, định cư',
        },
        {
          id: '2',
          title: 'Đầu vào: Vượt kiểm tra đầu vào',
        },
        {
          id: '3',
          title: 'Thời lượng học từ 1-3 tháng',
        },
        {
          id: '4',
          title: 'Cam kết chuẩn đầu ra',
        },
      ],
      reasonsToJoin: [
        {
          id: '1',
          title: 'Đang hướng tới mục tiêu PTE 30 đến 79',
          icon: 'target',
        },
        {
          id: '2',
          title:
            'Tìm kiếm một khóa học luyện thi cấp tốc, nội dung chuyên sâu tập trung vào chiến thuật và kỹ năng làm bài để đạt điểm cao.',
          icon: 'graduation-hat',
        },
        {
          id: '3',
          title: 'Bạn đang cần visa cho các mục đích đi du học hoặc định cư',
          icon: 'passport',
        },
        {
          id: '4',
          title:
            'Cần cải thiện phát âm, độ trôi chảy và vốn từ vựng của mình do chưa đáp ứng được yêu cầu mục tiêu đề ra.',
          icon: 'translate',
        },
      ],
      studyDetails: {
        duration: 'Tối đa 3 tháng',
        totalHours: '~ 24 giờ',
        hoursPerSession: 'Tối thiểu 1.5 giờ',
        schedule: 'Lịch học linh hoạt',
      },
      courseFeatures: [
        {
          id: '1',
          number: '01',
          title: 'Linh hoạt',
          description:
            'Thời gian và nội dung học được điều chỉnh hoàn toàn dựa trên mục tiêu cá nhân.',
        },
        {
          id: '2',
          number: '02',
          title: 'Khởi Đầu Vững Chắc',
          description:
            'Bắt đầu từ cơ bản với các kỹ năng phát âm và ngữ pháp, thiết lập nền tảng vững chắc để bạn sẵn sàng chinh phục mọi thử thách trong bài thi PTE.',
        },
        {
          id: '3',
          number: '03',
          title: 'Tương Tác Giáo Viên 1:1',
          description:
            'Học tập trực tiếp với giáo viên trong 24 giờ học, mỗi buổi từ thiểu 1.5 giờ, đảm bảo sự hỗ trợ tốt đa cho từng học viên',
        },
        {
          id: '4',
          number: '04',
          title: 'Hỗ Trợ Sửa Lỗi Cá Nhân',
          description:
            'Mọi lỗi phát âm hay ngữ pháp từ cơ bản đến nâng cao sẽ được giáo viên phát hiện và chỉnh sửa ngay, đảm bảo bạn tự tin hơn mỗi ngày.',
        },
        {
          id: '5',
          number: '05',
          title: 'Master Đề Thi',
          description:
            'Đến với Q3s, bạn sẽ trở thành bậc thầy giải đề, sẵn sàng đối mặt với mọi thử thách PTE!',
        },
      ],
      evaluate: studentEvaluate,
      faq: [
        {
          id: '1',
          question: 'Khóa học PTE Academic có những gì?',
          answer:
            'Khóa học bao gồm 24 giờ học trực tiếp 1-1 với giáo viên, tài liệu học tập, bài tập về nhà và các bài kiểm tra định kỳ để đánh giá tiến độ.',
        },
        {
          id: '2',
          question: 'Thời gian học có linh hoạt không?',
          answer:
            'Có, bạn có thể sắp xếp lịch học linh hoạt với giáo viên, mỗi buổi học kéo dài tối thiểu 1.5 giờ.',
        },
        {
          id: '3',
          question: 'Làm sao để đăng ký khóa học?',
          answer:
            'Bạn có thể đăng ký trực tiếp trên website hoặc liên hệ với chúng tôi qua hotline để được tư vấn chi tiết về khóa học phù hợp.',
        },
        {
          id: '4',
          question: 'Có cam kết đầu ra không?',
          answer:
            'Có, chúng tôi cam kết đầu ra dựa trên mục tiêu của bạn và kết quả kiểm tra đầu vào. Chi tiết sẽ được thảo luận trong buổi tư vấn.',
        },
        {
          id: '5',
          question: 'Có bao nhiêu buổi học?',
          answer:
            'Khóa học bao gồm 24 giờ học trực tiếp 1-1 với giáo viên, tài liệu học tập, bài tập về nhà và các bài kiểm tra định kỳ để đánh giá tiến độ.',
        },
      ],
      banner: {
        title: 'Thời gian là vàng!',
        subtitle: 'Đừng để cơ hội đạt target PTE vuột mất!',
        image: {
          src: '/images/courses/banner-registration.png',
          alt: 'Student with books',
        },
      },
    },
    en: {
      name: 'PTE Preparation Roadmap \nAchievers 1-on-1 Course',
      description: 'For All Score Bands',
      courseRoadmap: [
        {
          id: '1',
          title: 'Stage 1: Proficiency Test & Roadmap Consultation',
          description: [
            'To start your learning journey at Q3 Language, the first step is to take an English proficiency test.',
            'This helps accurately assess your current level and allows us to tailor the most suitable study plan and roadmap for your ability.',
          ],
        },
        {
          id: '2',
          title: 'Stage 2: 6 Strategy Sessions',
          description: [
            'Live strategy sessions with teachers, focusing on Listening, Speaking, Reading, and Writing skills.',
            'The content is tailored to your registered goal to help you master the exam structure and question types.',
          ],
        },
        {
          id: '3',
          title: 'Stage 3: 12 Intensive Lessons',
          description: [
            'Lessons dive deeply into each skill: Listening, Speaking, Reading, and Writing.',
            'Teachers will prepare detailed lesson plans to ensure in-depth practice and address specific weaknesses in each skill.',
            'You’ll complete regular exercises and tests for teachers to provide detailed feedback.',
          ],
        },
        {
          id: '4',
          title: 'Stage 4: Final Evaluation',
          description: [
            'Take mock tests with grading so the trainer can review and provide 1-on-1 feedback, correct errors, and help you improve before the real exam.',
          ],
        },
      ],
      overview: [
        {
          id: '1',
          title:
            'Goal: Achieve the score required for your visa, study abroad, or migration plans.',
        },
        { id: '2', title: 'Entry: Pass the placement test' },
        { id: '3', title: 'Course Duration: 1 to 3 months' },
        { id: '4', title: 'Guaranteed outcome commitment' },
      ],
      reasonsToJoin: [
        {
          id: '1',
          title: 'Aiming for a PTE score between 30 and 79',
          icon: 'target',
        },
        {
          id: '2',
          title:
            'Looking for an intensive exam prep course focusing on strategies and skills to maximize scores.',
          icon: 'graduation-hat',
        },
        {
          id: '3',
          title: 'Need a visa for study abroad or immigration',
          icon: 'passport',
        },
        {
          id: '4',
          title:
            'Need to improve pronunciation, fluency, and vocabulary to meet target requirements.',
          icon: 'translate',
        },
      ],
      studyDetails: {
        duration: 'Up to 3 months',
        totalHours: '~ 24 hours',
        hoursPerSession: 'At least 1.5 hours',
        schedule: 'Flexible scheduling',
      },
      courseFeatures: [
        {
          id: '1',
          number: '01',
          title: 'Flexibility',
          description:
            'Timing and course content are fully customized based on your personal goals.',
        },
        {
          id: '2',
          number: '02',
          title: 'Solid Foundation',
          description:
            'Start from the basics with pronunciation and grammar to build a strong foundation for PTE success.',
        },
        {
          id: '3',
          number: '03',
          title: '1-on-1 Teacher Interaction',
          description:
            'Learn directly with a teacher for 24 hours, with each session lasting at least 1.5 hours to ensure maximum support.',
        },
        {
          id: '4',
          number: '04',
          title: 'Personalized Error Correction',
          description:
            'All pronunciation and grammar mistakes, from basic to advanced, will be identified and corrected on the spot.',
        },
        {
          id: '5',
          number: '05',
          title: 'Master the Exam',
          description:
            'At Q3, you’ll become an exam expert, ready to conquer every PTE challenge!',
        },
      ],
      evaluate: studentEvaluate,

      faq: [
        {
          id: '1',
          question: 'What does the PTE Academic course include?',
          answer:
            'It includes 24 hours of 1-on-1 live classes, study materials, homework, and regular assessments.',
        },
        {
          id: '2',
          question: 'Is the study schedule flexible?',
          answer:
            'Yes, you can flexibly arrange your study schedule with the teacher. Each session lasts at least 1.5 hours.',
        },
        {
          id: '3',
          question: 'How do I enroll in the course?',
          answer:
            'You can register directly on the website or contact our hotline for personalized consultation.',
        },
        {
          id: '4',
          question: 'Is there a guaranteed result?',
          answer:
            'Yes, we commit to results based on your goal and entry test performance. This will be discussed during the consultation.',
        },
        {
          id: '5',
          question: 'How many sessions are there?',
          answer:
            'The course includes 24 hours of 1-on-1 live lessons with a teacher, study materials, homework, and periodic assessments.',
        },
      ],
      banner: {
        title: 'Time is Gold!',
        subtitle: 'Don’t let the chance to hit your PTE target slip away!',
        image: {
          src: '/images/courses/banner-registration.png',
          alt: 'Student with books',
        },
      },
    },
  },
  {
    id: '7',
    title: {
      vi: 'Khóa PTE 1 kèm 1',
      en: 'PTE One-on-One',
    },
    slug: 'pte-1-kem-1',
    previewSrc: '/images/courses/pte-1-kem-1.png',
    previewAlt: 'PTE 1 kèm 1',
    shortDescription: {
      vi: 'Lộ trình cá nhân hoá – Mỗi buổi học là một bước tiến rõ ràng',
      en: 'Tailored learning, focused results',
    },
    comingSoon: false,
    image: {
      desktop: {
        src: '/images/courses/course-banner-desktop.png',
        alt: 'course-banner',
      },
      mobile: {
        src: '/images/courses/course-banner-mobile.png',
        alt: 'course-banner',
      },
    },
    vi: {
      name: 'Khoá PTE 1 Kèm 1',
      description:
        'Lộ trình cá nhân hoá – Mỗi buổi học là một bước tiến rõ ràng',
      courseRoadmap: [
        {
          id: '1',
          title: 'Giai đoạn 1: Kiểm tra năng lực và tư vấn lộ trình',
          description: [
            'Làm bài kiểm tra đầu vào để xác định trình độ hiện tại.',
            'Tư vấn cá nhân hoá lộ trình học dựa trên kết quả và mục tiêu cá nhân.',
          ],
        },
        {
          id: '2',
          title: 'Giai đoạn 2: Buổi học chiến thuật',
          description: [
            'Học trực tiếp 1:1 với giáo viên, tập trung vào từng kỹ năng theo dạng bài thi PTE.',
            'Làm quen và áp dụng các chiến thuật hiệu quả cho từng dạng bài.',
          ],
        },
        {
          id: '3',
          title: 'Giai đoạn 3: Buổi học chuyên sâu',
          description: [
            'Luyện tập kỹ năng Nghe - Nói - Đọc - Viết theo kế hoạch cá nhân hoá.',
            'Khắc phục điểm yếu cụ thể qua thực hành, bài tập và đánh giá định kỳ.',
          ],
        },
        {
          id: '4',
          title: 'Giai đoạn 4: Đánh giá năng lực và chuẩn bị thi',
          description: [
            'Làm bài thi thử (mock test) có chấm điểm sát với kỳ thi thật.',
            'Được trainer sửa bài chi tiết 1:1 và hướng dẫn cải thiện rõ ràng trước ngày thi.',
          ],
        },
      ],
      overview: [
        {
          id: '1',
          title:
            'Mục tiêu đầu ra: Đạt điểm PTE từ 30 đến 79 (tùy mục tiêu cá nhân)',
        },
        {
          id: '2',
          title: 'Thời lượng khóa học: 2-3 tháng',
        },
        {
          id: '3',
          title: 'Điều kiện đầu vào: Vượt bài kiểm tra đầu vào',
        },
        {
          id: '4',
          title: 'Cam kết: Lộ trình học cá nhân hóa với cam kết đầu ra rõ ràng',
        },
      ],
      reasonsToJoin: [
        {
          id: '1',
          title:
            'Muốn có lộ trình học cá nhân hoá giúp đạt điểm PTE theo đúng mục tiêu đề ra.',
          icon: 'target',
        },
        {
          id: '2',
          title:
            'Cần lịch học cấp tốc, linh hoạt, dễ điều chỉnh theo công việc và sinh hoạt hàng ngày.',
          icon: 'graduation-hat',
        },
        {
          id: '3',
          title:
            'Đang tìm một khóa luyện thi có chiến lược rõ ràng, hướng dẫn chi tiết từng dạng bài.',
          icon: 'passport',
        },
        {
          id: '4',
          title:
            'Muốn được tương tác trực tiếp 1:1, nhận phản hồi nhanh và sát sao từ giáo viên trong mỗi buổi học.',
          icon: 'translate',
        },
      ],
      studyDetails: {
        duration: 'Tối đa 3 tháng',
        totalHours: '20-30 giờ',
        hoursPerSession: 'Tối thiểu 1.5 giờ',
        schedule: 'Linh hoạt theo lịch cá nhân của học viên và giáo viên',
      },
      courseFeatures: [
        {
          id: '1',
          number: '01',
          title: 'Linh hoạt tuyệt đối',
          description:
            'Thời gian và nội dung học được cá nhân hóa 100% theo mục tiêu và lịch trình của bạn.',
        },
        {
          id: '2',
          number: '02',
          title: 'Nền tảng vững chắc',
          description:
            'Bắt đầu từ phát âm & ngữ pháp cơ bản, giúp bạn xây gốc vững để học nâng cao dễ dàng hơn.',
        },
        {
          id: '3',
          number: '03',
          title: 'Học 1:1 cùng giáo viên',
          description:
            '10–15 giờ học cá nhân hoá, mỗi buổi từ 1.5 giờ, nhận hướng dẫn sát sao và phản hồi chi tiết.',
        },
        {
          id: '4',
          number: '04',
          title: 'Sửa lỗi tận gốc',
          description:
            'Giáo viên theo sát từng buổi, phát hiện và sửa ngay các lỗi phát âm, ngữ pháp, dùng từ – từ dễ đến nâng cao.',
        },
        {
          id: '5',
          number: '05',
          title: 'Làm chủ mọi dạng đề',
          description:
            'Hiểu rõ chiến thuật, luyện đúng kỹ thuật – bạn sẽ giải đề tự tin và chính xác hơn bao giờ hết.',
        },
      ],
      evaluate: studentEvaluate,

      faq: [
        {
          id: '1',
          question: 'Khóa học bao gồm những gì?',
          answer:
            'Gồm 20–30 giờ học 1:1 với giáo viên, tài liệu học tập, bài tập về nhà và kiểm tra định kỳ theo tiến độ.',
        },
        {
          id: '2',
          question: 'Thời gian học có linh hoạt không?',
          answer:
            'Có. Học viên có thể linh hoạt sắp xếp thời gian với giáo viên. Mỗi buổi học tối thiểu 1.5 giờ.',
        },
        {
          id: '3',
          question: 'Làm sao để đăng ký khóa học?',
          answer:
            'Đăng ký trực tiếp trên website hoặc liên hệ hotline để được tư vấn khóa học phù hợp với bạn.',
        },
        {
          id: '4',
          question: 'Khóa học có cam kết đầu ra không?',
          answer:
            'Có. Chúng tôi cam kết đầu ra dựa theo mục tiêu của bạn và kết quả đầu vào, trao đổi rõ trong buổi tư vấn đầu tiên.',
        },
        {
          id: '5',
          question: 'Tổng số buổi học là bao nhiêu?',
          answer:
            'Tuỳ gói học bạn chọn: 20–30 giờ học, mỗi buổi thường kéo dài 1.5 giờ.',
        },
      ],
      banner: {
        title: 'Thời gian là vàng!',
        subtitle: 'Đừng để cơ hội đạt target PTE vuột mất!',
        image: {
          src: '/images/courses/banner-registration.png',
          alt: 'Student with books',
        },
      },
    },
    en: {
      name: 'PTE One-on-One',
      description: 'Tailored learning, focused results',
      courseRoadmap: [
        {
          id: '1',
          title: 'Stage 1: Placement test and personalised consultation',
          description: [
            'Take an initial placement test to determine your current English level.',
            'Receive a personalised study plan based on your results and individual goals.',
          ],
        },
        {
          id: '2',
          title: 'Stage 2: Strategy sessions',
          description: [
            'Learn 1-on-1 with your trainer, focusing on each skill and PTE task type.',
            'Get familiar with and apply proven strategies for each question format.',
          ],
        },
        {
          id: '3',
          title: 'Stage 3: Intensive skills training',
          description: [
            'Practise Listening, Speaking, Reading, and Writing based on your tailored plan.',
            'Address specific weaknesses through practical tasks, homework, and regular assessments.',
          ],
        },
        {
          id: '4',
          title: 'Stage 4: Performance review and test readiness',
          description: [
            'Take mock tests with realistic scoring aligned to the actual exam.',
            'Receive detailed 1-on-1 feedback from your trainer, with clear steps for final improvement before the test.',
          ],
        },
      ],
      overview: [
        {
          id: '1',
          title:
            'Target outcome: Achieve a PTE score from 30 to 79 (depending on personal goals)',
        },
        { id: '2', title: 'Course duration: 2-3 months' },
        { id: '3', title: 'Entry requirement: Pass the placement test' },
        {
          id: '4',
          title:
            'Commitment: Personalised learning pathway with a clearly defined outcome guarantee',
        },
      ],
      reasonsToJoin: [
        {
          id: '1',
          title:
            'Want a personalised study plan to help you reach your exact PTE score goal.',
          icon: 'target',
        },
        {
          id: '2',
          title:
            'Need a fast-tracked, flexible schedule that fits around your work and daily routine.',
          icon: 'graduation-hat',
        },
        {
          id: '3',
          title:
            'Are looking for a well-structured course with clear strategies for each question type.',
          icon: 'passport',
        },
        {
          id: '4',
          title:
            'Prefer 1-on-1 interaction with your trainer and quick, detailed feedback every session.',
          icon: 'translate',
        },
      ],
      studyDetails: {
        duration: 'Up to 3 months',
        totalHours: '20–30 hours',
        hoursPerSession: 'Minimum 1.5 hours per session',
        schedule:
          'Flexible, based on the availability of both student and teacher',
      },
      courseFeatures: [
        {
          id: '1',
          number: '01',
          title: 'Ultimate Flexibility',
          description:
            'Your schedule and learning content are fully personalised to fit your goals and availability.',
        },
        {
          id: '2',
          number: '02',
          title: 'Strong Foundations',
          description:
            'Start with essential pronunciation and grammar, building a solid base to progress with ease.',
        },
        {
          id: '3',
          number: '03',
          title: '1-on-1 Learning with a Trainer',
          description:
            'Learn directly with a teacher for 24 hours, with each session lasting at least 1.5 hours to ensure maximum support.',
        },
        {
          id: '4',
          number: '04',
          title: 'Error Correction at the Root',
          description:
            'Your trainer will identify and correct pronunciation, grammar, and vocabulary mistakes on the spot – from basic to advanced.',
        },
        {
          id: '5',
          number: '05',
          title: 'Master Every Question Type',
          description:
            'Understand test strategies, apply techniques correctly, and approach every PTE task with confidence and accuracy.',
        },
      ],
      evaluate: studentEvaluate,

      faq: [
        {
          id: '1',
          question: 'What does the course include?',
          answer:
            'The course includes 20–30 hours of 1-on-1 lessons with a teacher, study materials, homework, and regular progress assessments.',
        },
        {
          id: '2',
          question: 'Is the schedule flexible?',
          answer:
            'Yes. Learners can arrange a flexible timetable directly with their teacher. Each session lasts a minimum of 1.5 hours.',
        },
        {
          id: '3',
          question: 'How can I enrol in the course?',
          answer:
            'You can register directly via our website or contact our hotline for a consultation to find the most suitable course for you.',
        },
        {
          id: '4',
          question: 'Is there a guaranteed outcome?',
          answer:
            'Yes. We offer a score guarantee based on your personal goal and placement test results, with details discussed in the initial consultation.',
        },
        {
          id: '5',
          question: 'How many lessons are there in total?',
          answer:
            'Depending on the course package you choose: 20–30 hours of learning, with each session typically lasting 1.5 hours.',
        },
      ],
      banner: {
        title: 'Time is Gold!',
        subtitle: 'Don’t let the chance to hit your PTE target slip away!',
        image: {
          src: '/images/courses/banner-registration.png',
          alt: 'Student with books',
        },
      },
    },
  },
  {
    id: '8',
    title: {
      vi: 'Khóa PTE Cấp Tốc',
      en: 'PTE Express',
    },
    slug: 'pte-cap-toc',
    previewSrc: '/images/courses/pte-cap-toc.png',
    previewAlt: 'PTE Cấp Tốc',
    shortDescription: {
      vi: 'Chương trình toàn diện này bao gồm tất cả các khía cạnh của bài kiểm tra, bao gồm nói, viết, nghe và đọc.',
      en: 'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
    },
    comingSoon: false,
    image: {
      desktop: {
        src: '/images/courses/course-banner-desktop.png',
        alt: 'course-banner',
      },
      mobile: {
        src: '/images/courses/course-banner-mobile.png',
        alt: 'course-banner',
      },
    },
    vi: {
      name: 'Khoá PTE Cấp Tốc',
      description: 'Học nhanh, thi chắc, đạt điểm thật',
      courseRoadmap: [
        {
          id: '1',
          title: 'Giai đoạn 1: Kiểm tra năng lực và tư vấn lộ trình',
          description: [
            'Làm bài kiểm tra đầu vào để xác định trình độ hiện tại.',
            'Tư vấn cá nhân hoá lộ trình học dựa trên kết quả và mục tiêu cá nhân.',
          ],
        },
        {
          id: '2',
          title: 'Giai đoạn 2: Buổi học chiến thuật',
          description: [
            'Học trực tiếp 1:1 với giáo viên, tập trung vào từng kỹ năng theo dạng bài thi PTE.',
            'Làm quen và áp dụng các chiến thuật hiệu quả cho từng dạng bài.',
          ],
        },
        {
          id: '3',
          title: 'Giai đoạn 3: Buổi học chuyên sâu',
          description: [
            'Luyện tập kỹ năng Nghe - Nói - Đọc - Viết theo kế hoạch cá nhân hoá.',
            'Khắc phục điểm yếu cụ thể qua thực hành, bài tập và đánh giá định kỳ.',
          ],
        },
        {
          id: '4',
          title: 'Giai đoạn 4: Đánh giá năng lực và chuẩn bị thi',
          description: [
            'Làm bài thi thử (mock test) có chấm điểm sát với kỳ thi thật.',
            'Được trainer sửa bài chi tiết 1:1 và hướng dẫn cải thiện rõ ràng trước ngày thi.',
          ],
        },
      ],
      overview: [
        {
          id: '1',
          title:
            'Mục tiêu đầu ra: Đạt điểm PTE từ 30 đến 79 (tùy mục tiêu cá nhân)',
        },
        {
          id: '2',
          title: 'Thời lượng khóa học: 1 tháng',
        },
        {
          id: '3',
          title: 'Điều kiện đầu vào: Vượt bài kiểm tra đầu vào',
        },
        {
          id: '4',
          title: 'Cam kết: Lộ trình học cá nhân hóa với cam kết đầu ra rõ ràng',
        },
      ],
      reasonsToJoin: [
        {
          id: '1',
          title:
            'Muốn có lộ trình học cá nhân hoá giúp đạt điểm PTE theo đúng mục tiêu đề ra.',
          icon: 'target',
        },
        {
          id: '2',
          title:
            'Cần lịch học cấp tốc, linh hoạt, dễ điều chỉnh theo công việc và sinh hoạt hàng ngày.',
          icon: 'graduation-hat',
        },
        {
          id: '3',
          title:
            'Đang tìm một khóa luyện thi có chiến lược rõ ràng, hướng dẫn chi tiết từng dạng bài.',
          icon: 'passport',
        },
        {
          id: '4',
          title:
            'Muốn được tương tác trực tiếp 1:1, nhận phản hồi nhanh và sát sao từ giáo viên trong mỗi buổi học.',
          icon: 'translate',
        },
      ],
      studyDetails: {
        duration: 'Tối đa 1 tháng',
        totalHours: '10-15 giờ',
        hoursPerSession: 'Tối thiểu 1.5 giờ',
        schedule: 'Linh hoạt theo lịch cá nhân của học viên và giáo viên',
      },
      courseFeatures: [
        {
          id: '1',
          number: '01',
          title: 'Linh hoạt tuyệt đối',
          description:
            'Thời gian và nội dung học được cá nhân hóa 100% theo mục tiêu và lịch trình của bạn.',
        },
        {
          id: '2',
          number: '02',
          title: 'Nền tảng vững chắc',
          description:
            'Bắt đầu từ phát âm & ngữ pháp cơ bản, giúp bạn xây gốc vững để học nâng cao dễ dàng hơn.',
        },
        {
          id: '3',
          number: '03',
          title: 'Học 1:1 cùng giáo viên',
          description:
            '10–15 giờ học cá nhân hoá, mỗi buổi từ 1.5 giờ, nhận hướng dẫn sát sao và phản hồi chi tiết.',
        },
        {
          id: '4',
          number: '04',
          title: 'Sửa lỗi tận gốc',
          description:
            'Giáo viên theo sát từng buổi, phát hiện và sửa ngay các lỗi phát âm, ngữ pháp, dùng từ – từ dễ đến nâng cao.',
        },
        {
          id: '5',
          number: '05',
          title: 'Làm chủ mọi dạng đề',
          description:
            'Hiểu rõ chiến thuật, luyện đúng kỹ thuật – bạn sẽ giải đề tự tin và chính xác hơn bao giờ hết.',
        },
      ],
      evaluate: studentEvaluate,

      faq: [
        {
          id: '1',
          question: 'Khóa học bao gồm những gì?',
          answer:
            'Gồm 10–15 giờ học 1:1 với giáo viên, tài liệu học tập, bài tập về nhà và kiểm tra định kỳ theo tiến độ.',
        },
        {
          id: '2',
          question: 'Thời gian học có linh hoạt không?',
          answer:
            'Có. Học viên có thể linh hoạt sắp xếp thời gian với giáo viên. Mỗi buổi học tối thiểu 1.5 giờ.',
        },
        {
          id: '3',
          question: 'Làm sao để đăng ký khóa học?',
          answer:
            'Đăng ký trực tiếp trên website hoặc liên hệ hotline để được tư vấn khóa học phù hợp với bạn.',
        },
        {
          id: '4',
          question: 'Khóa học có cam kết đầu ra không?',
          answer:
            'Có. Chúng tôi cam kết đầu ra dựa theo mục tiêu của bạn và kết quả đầu vào, trao đổi rõ trong buổi tư vấn đầu tiên.',
        },
        {
          id: '5',
          question: 'Tổng số buổi học là bao nhiêu?',
          answer:
            'Tuỳ gói học bạn chọn: 10–15 giờ học, mỗi buổi thường kéo dài 1.5 giờ.',
        },
      ],
      banner: {
        title: 'Thời gian là vàng!',
        subtitle: 'Đừng để cơ hội đạt target PTE vuột mất!',
        image: {
          src: '/images/courses/banner-registration.png',
          alt: 'Student with books',
        },
      },
    },
    en: {
      name: 'PTE Express',
      description: 'Fast-track your prep, secure your score',
      courseRoadmap: [
        {
          id: '1',
          title: 'Stage 1: Placement test and personalised consultation',
          description: [
            'Take an initial placement test to determine your current English level.',
            'Receive a personalised study plan based on your results and individual goals.',
          ],
        },
        {
          id: '2',
          title: 'Stage 2: Strategy sessions',
          description: [
            'Learn 1-on-1 with your trainer, focusing on each skill and PTE task type.',
            'Get familiar with and apply proven strategies for each question format.',
          ],
        },
        {
          id: '3',
          title: 'Stage 3: Intensive skills training',
          description: [
            'Practise Listening, Speaking, Reading, and Writing based on your tailored plan.',
            'Address specific weaknesses through practical tasks, homework, and regular assessments.',
          ],
        },
        {
          id: '4',
          title: 'Stage 4: Performance review and test readiness',
          description: [
            'Take mock tests with realistic scoring aligned to the actual exam.',
            'Receive detailed 1-on-1 feedback from your trainer, with clear steps for final improvement before the test.',
          ],
        },
      ],
      overview: [
        {
          id: '1',
          title:
            'Target outcome: Achieve a PTE score from 30 to 79 (depending on personal goals)',
        },
        { id: '2', title: 'Course duration: 1 month' },
        { id: '3', title: 'Entry requirement: Pass the placement test' },
        {
          id: '4',
          title:
            'Commitment: Personalised learning pathway with a clearly defined outcome guarantee',
        },
      ],
      reasonsToJoin: [
        {
          id: '1',
          title:
            'Want a personalised study plan to help you reach your exact PTE score goal.',
          icon: 'target',
        },
        {
          id: '2',
          title:
            'Need a fast-tracked, flexible schedule that fits around your work and daily routine.',
          icon: 'graduation-hat',
        },
        {
          id: '3',
          title:
            'Are looking for a well-structured course with clear strategies for each question type.',
          icon: 'passport',
        },
        {
          id: '4',
          title:
            'Prefer 1-on-1 interaction with your trainer and quick, detailed feedback every session.',
          icon: 'translate',
        },
      ],
      studyDetails: {
        duration: 'Up to 1 month',
        totalHours: '10–15 hours',
        hoursPerSession: 'Minimum 1.5 hours per session',
        schedule:
          'Flexible, based on the availability of both student and teacher',
      },
      courseFeatures: [
        {
          id: '1',
          number: '01',
          title: 'Ultimate Flexibility',
          description:
            'Your schedule and learning content are fully personalised to fit your goals and availability.',
        },
        {
          id: '2',
          number: '02',
          title: 'Strong Foundations',
          description:
            'Start with essential pronunciation and grammar, building a solid base to progress with ease.',
        },
        {
          id: '3',
          number: '03',
          title: '1-on-1 Learning with a Trainer',
          description:
            'Enjoy 10–15 hours of tailored lessons, each lasting 1.5 hours, with close guidance and detailed feedback.',
        },
        {
          id: '4',
          number: '04',
          title: 'Error Correction at the Root',
          description:
            'Your trainer will identify and correct pronunciation, grammar, and vocabulary mistakes on the spot – from basic to advanced.',
        },
        {
          id: '5',
          number: '05',
          title: 'Master Every Question Type',
          description:
            'Understand test strategies, apply techniques correctly, and approach every PTE task with confidence and accuracy.',
        },
      ],
      evaluate: studentEvaluate,

      faq: [
        {
          id: '1',
          question: 'What does the course include?',
          answer:
            'The course includes 10–15 hours of 1-on-1 lessons with a teacher, study materials, homework, and regular progress assessments.',
        },
        {
          id: '2',
          question: 'Is the schedule flexible?',
          answer:
            'Yes. Learners can arrange a flexible timetable directly with their teacher. Each session lasts a minimum of 1.5 hours.',
        },
        {
          id: '3',
          question: 'How can I enrol in the course?',
          answer:
            'You can register directly via our website or contact our hotline for a consultation to find the most suitable course for you.',
        },
        {
          id: '4',
          question: 'Is there a guaranteed outcome?',
          answer:
            'Yes. We offer a score guarantee based on your personal goal and placement test results, with details discussed in the initial consultation.',
        },
        {
          id: '5',
          question: 'How many lessons are there in total?',
          answer:
            'Depending on the course package you choose: 10–15 hours of learning, with each session typically lasting 1.5 hours.',
        },
      ],
      banner: {
        title: 'Time is Gold!',
        subtitle: 'Don’t let the chance to hit your PTE target slip away!',
        image: {
          src: '/images/courses/banner-registration.png',
          alt: 'Student with books',
        },
      },
    },
  },
];

export const courses = [
  {
    id: '1',
    title: 'Foundation Achievers 1',
    slug: 'foundation-achievers-1',
    previewSrc: '/images/courses/foundation-achievers-1.png',
    previewAlt: 'Foundation Achievers 1',
    shortDescription:
      'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
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
      evaluate: [
        {
          id: '1',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 1,
        },
        {
          id: '2',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '3',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '4',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '5',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
      ],
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
      evaluate: [
        {
          id: '1',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 1,
        },
        {
          id: '2',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '3',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '4',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 2,
        },
        {
          id: '5',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
      ],
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
    id: '2',
    title: 'PTE Achievers 30-36-42',
    slug: 'pte-achievers-30-36-42',
    previewSrc: '/images/courses/pte-achievers-30-36-42.png',
    previewAlt: 'PTE Achievers 30-36-42',
    shortDescription:
      'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
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
      evaluate: [
        {
          id: '1',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 1,
        },
        {
          id: '2',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '3',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '4',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '5',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
      ],
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
      evaluate: [
        {
          id: '1',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 1,
        },
        {
          id: '2',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '3',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '4',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 2,
        },
        {
          id: '5',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
      ],
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
    id: '3',
    title: 'PTE Achievers 36-42-50',
    slug: 'pte-achievers-36-42-50',
    previewSrc: '/images/courses/pte-achievers-36-42-50.png',
    previewAlt: 'PTE Achievers 36-42-50',
    shortDescription:
      'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
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
      evaluate: [
        {
          id: '1',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 1,
        },
        {
          id: '2',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '3',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '4',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '5',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
      ],
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
      evaluate: [
        {
          id: '1',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 1,
        },
        {
          id: '2',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '3',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '4',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 2,
        },
        {
          id: '5',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
      ],
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
    title: 'Foundation Achievers 2',
    slug: 'foundation-achievers-2',
    previewSrc: '/images/courses/foundation-achievers-2.png',
    previewAlt: 'Foundation Achievers 2',
    shortDescription:
      'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
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
      evaluate: [
        {
          id: '1',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 1,
        },
        {
          id: '2',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '3',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '4',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '5',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
      ],
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
      evaluate: [
        {
          id: '1',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 1,
        },
        {
          id: '2',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '3',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '4',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 2,
        },
        {
          id: '5',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
      ],
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
    id: '5',
    title: 'PTE Achievers 50-58',
    slug: 'pte-achievers-50-58',
    previewSrc: '/images/courses/pte-achievers-50-58.png',
    previewAlt: 'PTE Achievers 50-58',
    shortDescription:
      'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
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
      evaluate: [
        {
          id: '1',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 1,
        },
        {
          id: '2',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '3',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '4',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '5',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
      ],
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
      evaluate: [
        {
          id: '1',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 1,
        },
        {
          id: '2',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '3',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '4',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 2,
        },
        {
          id: '5',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
      ],
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
    id: '6',
    title: 'PTE Achievers 65-73-79',
    slug: 'pte-achievers-65-73-79',
    previewSrc: '/images/courses/pte-achievers-65-73-79.png',
    previewAlt: 'PTE Achievers 65-73-79',
    shortDescription:
      'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
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
      evaluate: [
        {
          id: '1',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 1,
        },
        {
          id: '2',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '3',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '4',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '5',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
      ],
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
      evaluate: [
        {
          id: '1',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 1,
        },
        {
          id: '2',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '3',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '4',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 2,
        },
        {
          id: '5',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
      ],
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
    id: '7',
    title: 'PTE 1 kèm 1',
    slug: 'pte-1-kem-1',
    previewSrc: '/images/courses/pte-1-kem-1.png',
    previewAlt: 'PTE 1 kèm 1',
    shortDescription:
      'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading.',
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
      evaluate: [
        {
          id: '1',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 1,
        },
        {
          id: '2',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '3',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '4',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '5',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
      ],
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
      evaluate: [
        {
          id: '1',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 1,
        },
        {
          id: '2',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '3',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '4',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 2,
        },
        {
          id: '5',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
      ],
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
    id: '8',
    title: 'PTE Cấp Tốc',
    slug: 'pte-cap-toc',
    previewSrc: '/images/courses/pte-cap-toc.png',
    previewAlt: 'PTE Cấp Tốc',
    shortDescription:
      'This comprehensive program covers all aspects of the test, including speaking, writing, listening, and reading jjdajdjaldaldkasdkadjkasdskajd.',
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
      evaluate: [
        {
          id: '1',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 1,
        },
        {
          id: '2',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '3',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '4',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '5',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
      ],
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
      evaluate: [
        {
          id: '1',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 1,
        },
        {
          id: '2',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '3',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
        {
          id: '4',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 2,
        },
        {
          id: '5',
          author: {
            name: 'Herman Miller',
            position: 'Student',
            image: {
              src: 'https://statictuoitre.mediacdn.vn/thumb_w/640/2017/7-1512755474943.jpg',
              alt: 'I would definitely recommend Medlink Students! They offer a very professional service and make the application process very quick and easy.',
            },
          },
          comment: 'I love this course!',
          rating: 5,
        },
      ],
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
];

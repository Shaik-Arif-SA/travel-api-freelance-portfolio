import { MentorType, ServiceType, TestimonialType } from '@/types/type';

/* ===================== MENTORS ===================== */

export const mentors: MentorType[] = [
  {
    id: 1,
    name: 'Nishant Soni',
    subject: 'Physics',
    institute: 'B.Tech NIT - Surat',
    image: '/images/hero/mentors4.webp'
  },
  {
    id: 2,
    name: 'Ambati Sravani',
    subject: 'Physics',
    institute: 'B.Tech NIT - Surat',
    image: '/images/hero/mentors3.webp'
  },
  {
    id: 3,
    name: 'Swapnil Sanadya',
    subject: 'Physics',
    institute: 'B.Tech NIT - Surat',
    image: '/images/hero/mentors2.webp'
  },
  {
    id: 4,
    name: 'Thangaraj S',
    subject: 'Physics',
    institute: 'B.Tech NIT - Surat',
    image: '/images/hero/mentors1.webp'
  },
  {
    id: 5,
    name: 'Manjunath A Y',
    subject: 'Chemistry',
    institute: 'B.Tech NIT - Suratkal',
    image: '/images/hero/mentors5.webp'
  }
];

/* ===================== TESTIMONIALS (UPDATED) ===================== */

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: 'Kartik',
    role: 'Student',
    image: '/images/hero/testimonial1.webp',
    disc:
      'I gave the psychometric test at Career Code and honestly it was an eye opener. The report showed me my strengths and areas I never thought about. Komal ma’am explained it so simply that I finally know which career suits me.'
  },
  {
    id: 2,
    name: 'Manav Chainani',
    role: 'Student',
    image: '/images/hero/testimonial2.webp',
    disc: 'Very helpful! Would 100% recommend.'
  },
  {
    id: 3,
    name: 'Prudenciana Alphanso',
    role: 'Parent',
    image: '/images/hero/testimonial3.webp',
    disc:
      'We were very confused about what stream my daughter should choose. After the aptitude test and one-to-one session, things became clear. Komal ma’am guided her so patiently and I could see my child getting more confident about her future.'
  },
  {
    id: 4,
    name: 'Manjusha Chainani',
    role: 'Parent',
    image: '/images/hero/testimonial4.webp',
    disc:
      'My son was confused about what to do after BCom. We got to know his strengths and shortcomings and he was guided well on suitable post-graduation options and job profiles where he will excel. I highly recommend Career Code for school and college students.'
  },
  {
    id: 5,
    name: 'Tejal Bandekar',
    role: 'Parent',
    image: '/images/hero/testimonial5.webp',
    disc:
      'My son studying in 9th standard was very confused about stream selection. Career Code provided excellent guidance through detailed tests and a clear career mapping report.'
  },
  {
    id: 6,
    name: 'Sarthak Bandekar',
    role: 'Student',
    image: '/images/hero/testimonial6.webp',
    disc:
      'Career Code really helped me find clarity about my goals and choose the right subjects in 9th standard. Counseling helped me understand my strengths and confidently choose commerce.'
  }
];

/* ===================== SERVICES ===================== */

export const services: ServiceType = {
  jee: [
    {
      id: 1,
      tag: 'Qualified Admission',
      tagColor: 'bg-[#015D85]',
      bgColor: 'bg-[#C7E5F2]',
      borderColor: 'border-[#015D85]',
      list: [
        ' Indian Institute of Information Technology (IIITs)',
        ' Indian Institute of Information Technology (IIITs)'
      ],
      svg: '/images/hero/service1.svg'
    },
    {
      id: 2,
      tag: 'Exam Pattern',
      tagColor: 'bg-[#AB9500]',
      bgColor: 'bg-[#F5F0CE]',
      borderColor: 'border-[#AB9500]',
      list: [' 90 Multiple Choice Questions', '3 Hours Time Duration'],
      svg: '/images/hero/service2.svg'
    },
    {
      id: 3,
      tag: 'Syllabus',
      tagColor: 'bg-[#D76100]',
      bgColor: 'bg-[#FFDDC1]',
      borderColor: 'border-[#D76100]',
      list: [' Physics', 'Chemistry', 'Maths'],
      svg: '/images/hero/service3.svg'
    },
    {
      id: 4,
      tag: 'Question Pattern',
      tagColor: 'bg-[#A60202]',
      bgColor: 'bg-[#FFC1C1]',
      borderColor: 'border-[#A60202]',
      list: [
        ' Each section has 30 questions',
        '4 points for each correct answer',
        '1 point is deducted for each wrong answer'
      ],
      svg: '/images/hero/service4.svg'
    }
  ],
  neet: [
    {
      id: 1,
      tag: 'Qualified Admission',
      tagColor: 'bg-[#015D85]',
      bgColor: 'bg-[#C7E5F2]',
      borderColor: 'border-[#015D85]',
      list: [
        ' Bachelor of Medicine and Bachelor of Surgery (MBBS)',
        ' Bachelor of Dental Surgery (BDS)'
      ],
      svg: '/images/hero/service1.svg'
    }
  ],
  tt: [
    {
      id: 1,
      bgColor: 'bg-[#C7E5F2]',
      borderColor: 'border-[#015D85]',
      list: ['Diploma in Early Childhood Education'],
      svg: '/images/hero/service5.svg'
    }
  ]
};

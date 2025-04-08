export interface Course {
  id: number;
  name: string;
  slug?: string;
  description: string;
  price: number;
  onSale: boolean;
  displayPrice?: number;
  image?: string;
  // categories: Category[];
  published: boolean;
  completed: number[];
  // difficulty: Difficulty;
  paid: boolean;
  instructorId: number;
  // instructor: User;
  // lessons: Lesson[];
  // ratings: Rating[];
  createdAt: Date;
  updatedAt: Date;
  // Completed: Completed[];
  // QA: QA[];
}

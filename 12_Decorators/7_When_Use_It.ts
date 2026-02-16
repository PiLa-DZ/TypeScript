// DRY (Don't Repeat Yourself)

// ============================================================
// 1. Declarative Routing
// Instead of manually writing router.post('/login', ...) for every single route, decorators let you define your API structure directly on your class methods. This makes your code much easier to read at a glance.

class UserController {
  @Post("/register")
  @HttpCode(201)
  register() {
    // Logic for registration
  }
}

// ============================================================
// 2. Validation & Sanitization
// Before data hits your MariaDB database, it must be clean. Using decorators (like the popular class-validator library), you can define rules directly on your data models.

class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;
}

// ============================================================
// 3. Authentication & Authorization (Guards)
// This is the most powerful use case. You can "protect" specific database operations or API endpoints by simply adding a tag. The decorator handles checking the JWT token or the user's role before the actual code runs.

class FinanceService {
  @Authorized("ADMIN") // Only runs if the user is an admin
  deleteTransaction(id: number) {
    // MariaDB delete logic
  }
}

// ============================================================
// 4. Database Mapping (ORM)
// When working with MariaDB, you need a way to tell your code which class property matches which database column. Decorators act as the "bridge."

@Table("students")
class Student {
  @Column({ primary: true })
  id: number;

  @Column()
  firstName: string;
}


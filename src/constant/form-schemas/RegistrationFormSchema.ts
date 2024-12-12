import { z } from "zod";
const phoneRegex = /^03\d{9}$/; // Phone should start with '03' and have exactly 11 digits
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email validation regex

const regFormSchema = z.object({
  basicInfo: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z
      .string()
      .regex(
        phoneRegex,
        "Phone number must start with '03' and be 11 digits long",
      ),
    Cnic: z.string().regex(/^\d{13}$/, "CNIC must be 13 digits"),
    institute: z.string().min(1, "Institute is required"),
    guardianPhone: z
      .string()
      .regex(
        phoneRegex,
        "Phone number must start with '03' and be 11 digits long",
      ),
    city: z.string().min(1, "City is required"),
    profilePicture: z
      .instanceof(File)
      .refine((file) => file.size > 0, "Profile picture is required"), // Ensure file is uploaded
    studentCard: z
      .instanceof(File)
      .refine((file) => file.size > 0, "Student card is required"), // Ensure file is uploaded
  }),
  applicationDetails: z.object({
    // Add validation for application details
  }),
  paymentInfo: z.object({
    paymentProof: z
      .instanceof(File)
      .refine((file) => file.size > 0, "Profile picture is required"), // Ensure file is uploaded
  }),
});
export default regFormSchema;
// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';
// import { z } from 'zod';

// const prisma = new PrismaClient();

// // Validation schema using Zod
// const registrationSchema = z.object({
//   teamName: z.string().min(1, 'Team name is required'),
//   teamLeader: z.object({
//     fullName: z.string().min(1, 'Full name is required'),
//     email: z.string().email('Invalid email'),
//     phone: z.string().optional(),
//     college: z.string().optional(),
//   }),
//   teamMembers: z.array(
//     z.object({
//       fullName: z.string().min(1, 'Full name is required'),
//       email: z.string().email('Invalid email'),
//       gender: z.enum(['MALE', 'FEMALE', 'OTHER']),
//     })
//   ).length(5, 'Exactly 5 additional team members are required'),
//   problemSelection: z.object({
//     problemStatementId: z.string().optional(),
//     customProblem: z.string().optional(),
//   }),
//   ideaSubmission: z.object({
//     title: z.string().min(1, 'Idea title is required'),
//     description: z.string().min(1, 'Idea description is required'),
//     technologies: z.string().min(1, 'Technologies are required'),
//     pptFileUrl: z.string().url('Invalid Google Drive URL').includes('drive.google.com', { message: 'Must be a Google Drive URL' }),
//   }),
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   try {
//     // Parse and validate request body
//     const data = registrationSchema.parse(req.body);

//     // Check if email already exists
//     const existingEmails = await prisma.teamMember.findMany({
//       where: {
//         email: {
//           in: [data.teamLeader.email, ...data.teamMembers.map(m => m.email)],
//         },
//       },
//       select: { email: true },
//     });

//     // if (existingEmails.length > 0) {
//     //   return res.status(400).json({
//     //     message: 'One or more email addresses are already registered',
//     //     // emails: existingEmails.map(e => e.email),
//     //   });
//     // }

//     // Verify at least one female participant
//     const hasFemale = data.teamMembers.some(m => m.gender === 'FEMALE');
//     if (!hasFemale) {
//       return res.status(400).json({
//         message: 'Team must have at least one female participant',
//       });
//     }

//     // Create team and related data in a transaction
//     const team = await prisma.team.create({
//       data: {
//         name: data.teamName,
//         members: {
//           create: [
//             {
//               fullName: data.teamLeader.fullName,
//               email: data.teamLeader.email,
//               phone: data.teamLeader.phone,
//               college: data.teamLeader.college,
//               gender: 'MALE', // Note: You might want to add gender to team leader form
//               isLeader: true,
//             },
//             ...data.teamMembers.map(member => ({
//               fullName: member.fullName,
//               email: member.email,
//               gender: member.gender,
//             })),
//           ],
//         },
//         problemSelection: {
//           create: {
//             customProblem: data.problemSelection.customProblem,
//             problemStatementId: data.problemSelection.problemStatementId,
//           },
//         },
//         ideaSubmission: {
//           create: {
//             title: data.ideaSubmission.title,
//             description: data.ideaSubmission.description,
//             technologies: data.ideaSubmission.technologies,
//             pptFileUrl: data.ideaSubmission.pptFileUrl,
//             pptFileId: data.ideaSubmission.pptFileUrl.split('/')[5], // Extract file ID from URL
//           },
//         },
//       },
//       include: {
//         members: true,
//         problemSelection: true,
//         ideaSubmission: true,
//       },
//     });

//     res.status(201).json({
//       message: 'Registration successful',
//       teamId: team.id,
//     });

//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return res.status(400).json({
//         message: 'Validation error',
//         errors: error.errors,
//       });
//     }
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   } finally {
//     await prisma.$disconnect();
//   }
// }
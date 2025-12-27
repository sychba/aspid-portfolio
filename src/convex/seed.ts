import { mutation } from "./_generated/server";

export const seedData = mutation({
  args: {},
  handler: async (ctx) => {
    // Clear existing projects
    const projects = await ctx.db.query("projects").collect();
    for (const project of projects) {
      await ctx.db.delete(project._id);
    }



    // Check if skills exist
    const existingSkills = await ctx.db.query("skills").first();
    if (!existingSkills) {
      // Seed Skills
      const skills = [
        { name: "React", category: "Frontend", level: 95 },
        { name: "TypeScript", category: "Frontend", level: 90 },
        { name: "Tailwind CSS", category: "Frontend", level: 95 },
        { name: "Node.js", category: "Backend", level: 85 },
        { name: "Python", category: "Backend", level: 80 },
        { name: "PostgreSQL", category: "Backend", level: 75 },
        { name: "Figma", category: "Design", level: 85 },
        { name: "Git", category: "Tools", level: 90 },
      ];

      for (const skill of skills) {
        await ctx.db.insert("skills", skill);
      }
    }

    // Clear existing experiences
    const experiences = await ctx.db.query("experiences").collect();
    for (const exp of experiences) {
      await ctx.db.delete(exp._id);
    }


  },
});
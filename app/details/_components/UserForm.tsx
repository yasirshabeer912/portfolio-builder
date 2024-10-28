// components/UserForm.js
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function UserForm() {
  const { user } = useUser();
  const [skills, setSkills] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: user?.fullName || "",
      email: user?.emailAddresses?.[0]?.emailAddress || "",
      title: "",
      tagline: "",
      description: "",
      skill: "",
      phone: "",
      linkedIn: "",
      github: ""
    },
  });

  const onSubmit = (data:any) => {
    data.skills = skills; // Add skills to form data before submitting
    console.log("Form Data", data);
  };

  const handleAddSkill = () => {
    const skill = watch("skill");
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
      setValue("skill", ""); // Clear input field after adding skill
    }
  };

  const handleRemoveSkill = (skillToRemove:string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Full Name</label>
        <Input
          {...register("fullName", { required: "Full Name is required" })}
          placeholder="Full Name"
        />
        {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Title</label>
        <Input
          {...register("title", { required: "Title is required" })}
          placeholder="Title"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Tagline (optional)</label>
        <Input
          {...register("tagline", { maxLength: { value: 50, message: "Max 50 characters" } })}
          placeholder="Tagline"
        />
        {errors.tagline && <p className="text-red-500">{errors.tagline.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Description</label>
        <Textarea
          rows={4}
          {...register("description", {
            required: "Description is required",
            minLength: { value: 50, message: "At least 50 characters required" },
            maxLength: { value: 250, message: "Max 250 characters" },
          })}
          placeholder="A brief description of yourself"
        />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Email</label>
        <Input
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Skills</label>
        <div className="flex gap-x-2">
          <Input
            {...register("skill", { required: skills.length === 0 ? "At least one skill is required" : false })}
            placeholder="Add a new skill"
          />
          <Button type="button" onClick={handleAddSkill}>Add Skill</Button>
        </div>
        {errors.skill && <p className="text-red-500">{errors.skill.message}</p>}

        <div className="mt-2 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center px-3 py-1 bg-gray-200 rounded-full text-sm">
              {skill}
              <button type="button" onClick={() => handleRemoveSkill(skill)} className="ml-2 text-red-500">×</button>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Phone (optional)</label>
        <Input
          type="tel"
          {...register("phone")}
          placeholder="+1234567890"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">LinkedIn URL (optional)</label>
        <Input
          {...register("linkedIn")}
          placeholder="https://www.linkedin.com/in/johndoe"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">GitHub URL (optional)</label>
        <Input
          {...register("github")}
          placeholder="https://github.com/johndoe"
        />
      </div>

      <Button type="submit" className="w-full">Create Portfolio</Button>
    </form>
  );
}

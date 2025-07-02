import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import Input from "../../components/Inputs/Input";
import Loader from "../../components/Loader/Loader";

const CreateSessionForm = () => {
  const [formData, setFormData] = useState({
    role: "",
    experience: "",
    topicsToFocus: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (key, value) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleCreateSession = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    try {
      const { role, experience, topicsToFocus, description } = formData;

      if (!role || !experience || !topicsToFocus || !description) {
        setError("Please fill all the required fields.");
        setIsLoading(false);
        return;
      }

      // Log token for debugging
      const token = localStorage.getItem("token");
      console.log("Token in localStorage:", token);

      // Log request body
      console.log("Sending to AI:", {
        role,
        experience,
        topicsToFocus,
        numberOfQuestions: 5,
      });
      const aiResponse = await axiosInstance.post(
        API_PATHS.AI.GENERATE_QUESTIONS,
        {
          role,
          experience,
          topicsToFocus,
          numberOfQuestions: 5,
        }
      );
      console.log("AI Response:", aiResponse.data);

      const generatedQuestions = aiResponse.data;

      // Log request body for session creation
      console.log("Sending to SESSION.CREATE:", {
        ...formData,
        questions: generatedQuestions,
      });
      const response = await axiosInstance.post(API_PATHS.SESSION.CREATE, {
        ...formData,
        questions: generatedQuestions,
      });
      console.log("Session Create Response:", response.data);

      if (response.data?.session?._id) {
        navigate(`/interview-prep/${response.data?.session?._id}`);
      }
    } catch (error) {
      // Log the full error object
      console.error("Error creating session:", error);
      if (error.response) {
        console.error("Error response:", error.response);
        setError(
          error.response.data?.message || JSON.stringify(error.response.data)
        );
      } else if (error.request) {
        console.error("Error request:", error.request);
        setError("No response from server. Check your network.");
      } else {
        setError(
          error.message || "Something went wrong. Please try again later."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[90vw] md:w-[35vw] p-7 flex flex-col justify-center">
      <h3 className="text-lg font-semibold text-black">
        Start New Interview Journey
      </h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-3">
        Fill out a few quick details and unlock your personalized set of
        interview questions!
      </p>
      <form className="flex flex-col gap-3" onSubmit={handleCreateSession}>
        <Input
          value={formData.role}
          onChange={({ target }) => handleChange("role", target.value)}
          label="Target Role"
          type="text"
          placeholder="(e.g., Frontend Developer, UI/UX Designer, etc.)"
        />

        <Input
          value={formData.experience}
          onChange={({ target }) => handleChange("experience", target.value)}
          label="Years Of Experience"
          type="text"
          placeholder="(e.g., 1 year, 3 years, 5+ years)"
        />

        <Input
          value={formData.topicsToFocus}
          onChange={({ target }) => handleChange("topicsToFocus", target.value)}
          label="Topics To Focus On"
          type="text"
          placeholder="(Comma-separated, e.g., React, JavaScript, HTML ...)"
        />

        <Input
          value={formData.description}
          onChange={({ target }) => handleChange("description", target.value)}
          label="Description"
          type="text"
          placeholder="(Any specific goals or notes for this session)"
        />

        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

        <button
          type="submit"
          className="btn-primary w-full mt-2"
          disabled={isLoading}
        >
          {isLoading && <Loader />} Create Session
        </button>
      </form>
    </div>
  );
};

export default CreateSessionForm;

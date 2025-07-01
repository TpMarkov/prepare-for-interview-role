import React from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { AnimatePresence, motion } from "framer-motion";
import { LuCircleAlert, LuListCollapse } from "react-icons/lu";
import Loader from "../../components/Loader/Loader";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { useState } from "react";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import RoleInfoHeader from "./components/RoleInfoHeader";

function InterviewPrep({ session }) {
  const { sessionId } = useParams();

  const [sessionData, setSessionData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const [openLeanMoreDrawer, setOpenLeanMoreDrawer] = useState(false);
  const [explanation, setExplanation] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateLoader, setIsUpdateLoader] = useState(false);

  //  Fetch session data by id
  const fetchSessionDetailsById = async () => {};

  //  Generate Concept Explanation
  const generateConceptExplanation = async () => {};

  // Pin Question
  const toggleQuestionPinStatus = async () => {};

  //  Add more questions to a session
  const uploadMoreQuestions = async () => {};

  useEffect(() => {
    if (sessionId) {
      fetchSessionDetailsById();
    }

    return () => {};
  }, []);

  return (
    <DashboardLayout>
      <RoleInfoHeader
        role={sessionData?.role || ""}
        topicsToFocus={sessionData?.topicsToFocus || ""}
        experience={sessionData?.experience || "-"}
        questions={sessionData?.questions?.length || "-"}
        description={sessionData?.description || ""}
        lastUpdated={
          sessionData?.updatedAt
            ? moment(sessionData.updatedAt).format("Do MMM YYYY")
            : ""
        }
      ></RoleInfoHeader>
    </DashboardLayout>
  );
}

export default InterviewPrep;

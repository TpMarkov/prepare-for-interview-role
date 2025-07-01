import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { CARD_BG } from "../../utils/data";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { API_PATHS } from "../../utils/apiPaths";
import axiosInstance from "../../utils/axiosInstance";
import DashboardLayout from "../../components/Layout/DashboardLayout";
import moment from "moment";
import SumaryCard from "../../components/Cards/SumaryCard";
import Modal from "../../components/Modal";
import CreateSessionForm from "./CreateSessionForm";

function Dashboard() {
  const navigate = useNavigate();

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [sessions, setSessions] = useState([]);

  const [openDeleteAlert, setOpenDleteAlert] = useState({
    open: false,
    data: null,
  });

  const fetchAllSessions = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.SESSION.GET_ALL);

      setSessions(response.data);
    } catch (error) {
      console.error("Error fetching all sessions.", error.message);
    }
  };

  const deleteSession = async (sessionData) => {};

  useEffect(() => {
    fetchAllSessions();
  }, []);

  return (
    <DashboardLayout>
      <div className="container mx-auto pt-4 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-1 pb-6 px-3 sm:px-4">
          {sessions?.map((data, index) => (
            <SumaryCard
              key={data._id}
              colors={CARD_BG[index % CARD_BG.length]}
              role={data?.role || ""}
              topicsToFocus={data?.topicsToFocus || ""}
              experience={data?.experience || "-"}
              questions={data?.questions?.length || "-"}
              description={data?.description || ""}
              lastUpdated={
                data?.updatedAt
                  ? moment(data.updatedAt).format("Do MMM YYYY")
                  : ""
              }
              onSelect={() => navigate(`/interview-prep/${data?._id}`)}
              onDelete={() => setOpenDleteAlert({ open: true, data })}
            />
          ))}
        </div>
        <button
          className="h-12 flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer hover:shadow-2xl hover:shadow-orange-300 fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50"
          onClick={() => setOpenCreateModal(true)}
        >
          <LuPlus className="text-xl text-white" />
          <span className="hidden sm:inline">Add New</span>
        </button>
      </div>

      <Modal
        isOpen={openCreateModal}
        onClose={() => {
          setOpenCreateModal(false);
        }}
        hideHeader
      >
        <div>
          <CreateSessionForm />
        </div>
      </Modal>
    </DashboardLayout>
  );
}

export default Dashboard;

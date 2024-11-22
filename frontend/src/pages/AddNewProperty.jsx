import { useState } from "react";
import AddPropertySteps, {
  AddPropertyStepConstant,
} from "../components/add-property/AddPropertySteps";
import ProjectInformation from "../components/add-property/projectInformation";
import UnitInformationForm from "../components/add-property/unitInformation";
import FloorInformationForm from "../components/add-property/floorInformation";
import OwnerInformation from "../components/add-property/ownerInformation";
import AppPopup from "../components/common/AppPopup";
import { useNavigate } from "react-router-dom";
import PropertyInfoDisplay from "../components/add-property/PropertyInfoDisplay";
import { useMatchStore } from "../store/projectStore";
import Modal from "@mui/material/Modal";
import { BsCheck } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import { useAtom } from "jotai";
import { floor, unit } from "../store/photo";

const fetchInitialValue = () => {
  const isLocalStorageDataExist = JSON.parse(localStorage.getItem("newEntry"));
  if (isLocalStorageDataExist) {
    return isLocalStorageDataExist;
  }
  return {
    projectInformation: {},
    floorInformation: {},
    unitInformation: {},
    ownerInformation: {},
  };
};

const AddPropertyPage = () => {
  const [formData, setFormData] = useState(fetchInitialValue());
  const [open, setOpen] = useState(false);
  const [unitValue, setUnitValue] = useAtom(unit);
  const [floorValue, setFloorValue] = useAtom(floor);
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  const {
    currentFormIndex,
    setCurrentFormIndex,
    addProperty
  } = useMatchStore();

  const updateInputValue = (value, event, type, check = null) => {
    let name = null;
    if (check) {
      name = check;
    } else {
      name = event?.target?.name;
    }
    const newFormData = { ...formData };
    newFormData[type][name] = value;
    setFormData(newFormData);
    
    // Save to localStorage as draft
    localStorage.setItem("newEntry", JSON.stringify(newFormData));
  };

  const handleProperties = () => {
    localStorage.removeItem("newEntry");
    navigate("/property");
  };

  const getValue = (type, name) => {
    return formData[type][name];
  };

  const handleNextForm = () => {
    if (AddPropertyStepConstant.length - 1 > currentFormIndex) {
      setCurrentFormIndex(currentFormIndex + 1);
    }
  };

  const handlePrevForm = () => {
    if (currentFormIndex > 0) {
      setCurrentFormIndex(currentFormIndex - 1);
    }
  };

const onSaveDraft = () => {
  localStorage.setItem("newEntry", JSON.stringify(formData));
    toast.success("Saved to draft");
  try {
    // Save to Zustand store as draft
    addProperty(formData, true);
    
    // Clear the form draft from localStorage
    localStorage.removeItem("newEntry");
    
    // Show success message
    toast.success("Saved as draft");
    
    // Navigate to properties list
    setTimeout(() => {
      navigate("/properties");
    }, 1500);
  } catch (error) {
    toast.error("Error saving draft");
    console.error(error);
  }
};

  const onSaveClick = async (e) => {
    e.preventDefault();
    switch (AddPropertyStepConstant[currentFormIndex].id) {
      case 1:
        // Project Information validations
        if (!formData?.projectInformation?.name) {
          toast.error("Please Enter Project Name");
          return;
        }
        if (!formData?.projectInformation?.plotNumber) {
          toast.error("Please Enter Plot Number");
          return;
        }
        if (!formData?.projectInformation?.totalFloors) {
          toast.error("Please Enter Total Floors");
          return;
        }
        if (!formData?.projectInformation?.totalBasements) {
          toast.error("Please Enter Total Basements");
          return;
        }
        if (!formData?.projectInformation?.totalArea) {
          toast.error("Please Enter Total Area");
          return;
        }
        if (!formData?.projectInformation?.vacantArea) {
          toast.error("Please Enter Vacant Area");
          return;
        }
        if (!formData?.projectInformation?.perFloorSize) {
          toast.error("Please Enter Per Floor Size");
          return;
        }
        if (!formData?.projectInformation?.buildingType) {
          toast.error("Please Enter Building Type");
          return;
        }
        if (!formData?.projectInformation?.powerBackup) {
          toast.error("Please Enter Power Backup");
          return;
        }
        if (!formData?.projectInformation?.state) {
          toast.error("Please Enter State");
          return;
        }
        if (!formData?.projectInformation?.city) {
          toast.error("Please Enter City");
          return;
        }
        if (!formData?.projectInformation?.location) {
          toast.error("Please Enter Location");
          return;
        }
        setCurrentFormIndex(currentFormIndex + 1);
        break;

      case 2:
        // Floor Information validations
        if (!formData?.floorInformation?.floorNumber) {
          toast.error("Please Enter Floor Number");
          return;
        }
        if (!formData?.floorInformation?.totalUnits) {
          toast.error("Please Enter Total Units");
          return;
        }
        if (!formData?.floorInformation?.floorArea) {
          toast.error("Please Enter Floor Area");
          return;
        }
        setCurrentFormIndex(currentFormIndex + 1);
        break;

      case 3:
        // Unit Information validations
        if (!formData?.unitInformation?.unitNumber) {
          toast.error("Please Enter Unit Number");
          return;
        }
        if (!formData?.unitInformation?.unitArea) {
          toast.error("Please Enter Unit Area");
          return;
        }
        if (!formData?.unitInformation?.askingRental) {
          toast.error("Please Enter Asking Rental");
          return;
        }
        setCurrentFormIndex(currentFormIndex + 1);
        break;

      case 4:
        // Owner Information validations
        if (!formData?.ownerInformation?.email) {
          toast.error("Please Enter Email");
          return;
        }
        if (!formData?.ownerInformation?.name) {
          toast.error("Please Enter Name");
          return;
        }
        if (!formData?.ownerInformation?.mobileNumber) {
          toast.error("Please Enter Mobile Number");
          return;
        }

        try {
          // Save to Zustand store
          addProperty(formData);
          
          // Clear draft from localStorage
          localStorage.removeItem("newEntry");
          
          // Show success message
          setOpen(true);
          
          // Navigate after delay
          setTimeout(() => {
            navigate("/properties");
          }, 1500);
        } catch (error) {
          toast.error("Error saving property");
          console.error(error);
        }
        break;

      default:
        console.log("Unknown step");
    }
  };

  const showFormBasedOnId = () => {
    switch (AddPropertyStepConstant[currentFormIndex].id) {
      case 1:
        return (
          <ProjectInformation
            getValue={getValue}
            updateInputValue={updateInputValue}
          />
        );
      case 2:
        return (
          <FloorInformationForm
            getValue={getValue}
            updateInputValue={updateInputValue}
          />
        );
      case 3:
        return (
          <UnitInformationForm
            getValue={getValue}
            updateInputValue={updateInputValue}
          />
        );
      case 4:
        return (
          <OwnerInformation
            getValue={getValue}
            updateInputValue={updateInputValue}
          />
        );
      default:
        return null;
    }
  };

  const showProjectInfoOnTop = () => {
    if (currentFormIndex > 1) {
      return <PropertyInfoDisplay />;
    }
    return null;
  };

  return (
    <>
      <div className="flex flex-col tablet:flex-row justify-center gap-8 mt-4 px-5">
        <Modal
          open={open}
          className="flex justify-center items-center"
        >
          <div className="w-96 h-64 bg-white flex justify-evenly rounded-2xl flex-col items-center ">
            <BsCheck className="text-green-500 bg-green-100 rounded-full text-5xl mt-4" />
            <h2 className="!text-xl !font-bold">Successfully Added</h2>
            <p id="modal-modal-description">
              Property details has been added successfully
            </p>
            <button
              type="button"
              className="rounded-md bg-red-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-100"
              onClick={() => setOpen(false)}
            >
              Saved
            </button>
          </div>
        </Modal>

        <div className="border-b border-gray-200 bg-[white] pr-4 py-5 w-[250px] shadow-md rounded-md h-[100%]">
          <AddPropertySteps currentFormIndex={currentFormIndex} />
        </div>

        <div className="w-full tablet:w-[50%]">
          {showProjectInfoOnTop()}
          <div className="border-b border-gray-200 bg-[white] px-4 py-5 sm:px-6 shadow-md rounded-md">
            <form>
              {showFormBasedOnId()}
              <div className="mt-6 flex items-center justify-between gap-x-6">
                <button
                  type="button"
                  className="rounded-md bg-red-100 px-4 py-2 text-sm font-semibold text-red-900 shadow-sm hover:bg-red-100"
                  onClick={onSaveDraft}
                >
                  Save to Draft
                </button>
                <div>
                  <button
                    type="button"
                    className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mr-3"
                    onClick={handlePrevForm}
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-red-900 px-4 py-2 text-sm font-light text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={onSaveClick}
                  >
                    Save
                  </button>
                  <AppPopup
                    title="Property Added"
                    showPopup={popup}
                    setShowPopup={setPopup}
                    buttonTitle="Go To Property List"
                    onButtonClick={handleProperties}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default AddPropertyPage;
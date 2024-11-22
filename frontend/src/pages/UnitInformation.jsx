import CustomInput from "../components/common/CustomInput";
import CustomDropdown from "../components/common/CustomDropdown";
import { useMatchStore } from "../store/projectStore";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";

const UnitInformation = () => {
  const { properties, updateProperty } = useMatchStore();
  const { propertyId, unitId } = useParams();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const property = properties.find((prop) => prop.id === propertyId);
    if (property && property.unitInformation.id === unitId) {
      setFormData(property.unitInformation);
    }
  }, [propertyId, unitId, properties]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (!unitId || !propertyId) {
      console.error("Property ID or Unit ID is not set!");
      return;
    }
  
    // Make sure we preserve the ID when updating
    const updatedFormData = {
      ...formData,
      id: unitId,
    };
  
    updateProperty(propertyId, { unitInformation: updatedFormData });
    navigate("/properties");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-6 py-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Update Unit Information
      </h2>
      <p className="text-sm text-gray-600 text-center mt-2">
        Provide details about the unit below. Fields marked with * are mandatory.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <CustomInput
          title="Area (in Sqft)*"
          type="text"
          name="area"
          inputProps={{
            onChange: handleInputChange,
            value: formData.area || "",
          }}
        />
        <CustomInput
          title="Mezzanine Area (in sqft)"
          type="text"
          name="mezzanineArea"
          inputProps={{
            onChange: handleInputChange,
            value: formData.mezzanineArea || "",
          }}
        />
        <CustomDropdown
          title="Floor*"
          name="floor"
          options={[
            { title: "Ground", value: "Ground" },
            { title: "First", value: "First" },
            { title: "Second", value: "Second" },
          ]}
          inputProps={{
            onChange: handleInputChange,
            value: formData.floor || "",
          }}
        />
        <CustomDropdown
          title="Industrial Lift"
          name="industrialLift"
          options={[
            { title: "Yes", value: "Yes" },
            { title: "No", value: "No" },
            { title: "Can be done", value: "Can be done" },
          ]}
          inputProps={{
            onChange: handleInputChange,
            value: formData.industrialLift || "",
          }}
        />
        <CustomInput
          title="Lift Capacity (in Ton)"
          type="text"
          name="liftCapacity"
          inputProps={{
            onChange: handleInputChange,
            value: formData.liftCapacity || "",
          }}
        />
        <CustomDropdown
          title="Type of Floor*"
          name="typeOfFloor"
          options={[
            { title: "RCC", value: "RCC" },
            { title: "VDF", value: "VDF" },
            { title: "FM II", value: "FM II" },
            { title: "Tremix", value: "Tremix" },
          ]}
          inputProps={{
            onChange: handleInputChange,
            value: formData.typeOfFloor || "",
          }}
        />
        <CustomDropdown
          title="Type of Building*"
          name="typeOfBuilding"
          options={[
            { title: "RCC", value: "RCC" },
            { title: "PEB", value: "PEB" },
          ]}
          inputProps={{
            onChange: handleInputChange,
            value: formData.typeOfBuilding || "",
          }}
        />
        <CustomInput
          title="Clear Height (in ft)"
          type="text"
          name="clearHeight"
          inputProps={{
            onChange: handleInputChange,
            value: formData.clearHeight || "",
          }}
        />
        <CustomInput
          title="Centre Height (in ft)"
          type="text"
          name="centreHeight"
          inputProps={{
            onChange: handleInputChange,
            value: formData.centreHeight || "",
          }}
        />
        <CustomInput
          title="Number of Docks"
          type="text"
          name="noOfDocks"
          inputProps={{
            onChange: handleInputChange,
            value: formData.noOfDocks || "",
          }}
        />
        <CustomInput
          title="Dock Level (in ft)"
          type="text"
          name="dockLevel"
          inputProps={{
            onChange: handleInputChange,
            value: formData.dockLevel || "",
          }}
        />
        <CustomInput
          title="Parking Space"
          type="text"
          name="parkingSpace"
          inputProps={{
            onChange: handleInputChange,
            value: formData.parkingSpace || "",
          }}
        />
        <CustomDropdown
          title="Ventilation"
          name="ventilation"
          options={[
            { title: "Turbo vents", value: "Turbo vents" },
            { title: "Ridge Vents", value: "Ridge Vents" },
          ]}
          inputProps={{
            onChange: handleInputChange,
            value: formData.ventilation || "",
          }}
        />
        <CustomInput
          title="Sky Light (%)"
          type="text"
          name="skyLight"
          inputProps={{
            onChange: handleInputChange,
            value: formData.skyLight || "",
          }}
        />
        <CustomDropdown
          title="Fire Provisions"
          name="fireProvisions"
          options={[
            { title: "Hydrants", value: "Hydrants" },
            { title: "Spriklers", value: "Spriklers" },
          ]}
          inputProps={{
            onChange: handleInputChange,
            value: formData.fireProvisions || "",
          }}
        />
        <CustomDropdown
          title="Fire NOC"
          name="fireNOC"
          options={[
            { title: "Yes", value: "Yes" },
            { title: "No", value: "No" },
            { title: "Can be done", value: "Can be done" },
          ]}
          inputProps={{
            onChange: handleInputChange,
            value: formData.fireNOC || "",
          }}
        />
        <CustomInput
          title="Fire Water Tank Capacity (in liters)"
          type="text"
          name="fireWaterTankCapacity"
          inputProps={{
            onChange: handleInputChange,
            value: formData.fireWaterTankCapacity || "",
          }}
        />
        <CustomInput
          title="Rent (per sqft)"
          type="text"
          name="rent"
          inputProps={{
            onChange: handleInputChange,
            value: formData.rent || "",
          }}
        />
        <CustomDropdown
          title="Possession"
          name="possession"
          options={[
            { title: "Immediate", value: "Immediate" },
            { title: "In 1 month", value: "1 month" },
            { title: "In 2 months", value: "2 months" },
            { title: "In 3 months", value: "3 months" },
          ]}
          inputProps={{
            onChange: handleInputChange,
            value: formData.possession || "",
          }}
        />
        <CustomDropdown
          title="Office Space"
          name="officeSpace"
          options={[
            { title: "Yes", value: "Yes" },
            { title: "No", value: "No" },
            { title: "Can be done", value: "Can be done" },
          ]}
          inputProps={{
            onChange: handleInputChange,
            value: formData.officeSpace || "",
          }}
        />
        <CustomDropdown
          title="Toilets"
          name="toilets"
          options={[
            { title: "Yes", value: "Yes" },
            { title: "No", value: "No" },
            { title: "Can be done", value: "Can be done" },
          ]}
          inputProps={{
            onChange: handleInputChange,
            value: formData.toilets || "",
          }}
        />
        <CustomDropdown
          title="Occupancy Status*"
          name="occupancyStatus"
          options={[
            { title: "Occupied", value: "Occupied" },
            { title: "Vacant", value: "Vacant" },
          ]}
          inputProps={{
            onChange: handleInputChange,
            value: formData.occupancyStatus || "",
          }}
        />
        <CustomInput
          title="Occupied Company Name"
          type="text"
          name="occupiedCompanyName"
          inputProps={{
            onChange: handleInputChange,
            value: formData.occupiedCompanyName || "",
            disabled: formData.occupancyStatus !== "Occupied",
          }}
        />
      </div>

      <div className="mt-8">
        <label className="block text-sm font-medium text-gray-700">
          Upload Unit Photos
        </label>
        <div className="mt-4 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
          <div className="text-center">
            <PhotoIcon className="mx-auto h-10 w-10 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">Click to upload or drag & drop</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-4">
        <button
          type="button"
          className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => navigate("/properties")}
        >
          Cancel
        </button>
        <button
          type="button"
          className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UnitInformation;
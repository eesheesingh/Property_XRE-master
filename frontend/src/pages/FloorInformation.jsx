import { PhotoIcon } from "@heroicons/react/24/outline";
import CustomInput from "../components/common/CustomInput";
import { useMatchStore } from "../store/projectStore";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const FloorInformation = () => {
  const { properties, updateProperty } = useMatchStore();
  const { propertyId, floorId } = useParams();
  const [formData, setFormData] = useState({});
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const property = properties.find((prop) => prop.id === propertyId);
    if (property && property.floorInformation.id === floorId) {
      setFormData(property.floorInformation);
      setPreviewImage(property.floorInformation.FloorImage || null);
    }
  }, [propertyId, floorId, properties]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setFormData((prev) => ({
          ...prev,
          FloorImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!floorId || !propertyId) {
      console.error("Floor ID or Property ID is not set!");
      return;
    }

    updateProperty(propertyId, { ...formData }, "floorInformation");
    navigate(`/properties/${propertyId}`); // Redirect to property details
  };

  const handleCancel = () => {
    navigate(`/properties/${propertyId}`);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-6 py-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Update Floor Information</h2>
      <p className="text-sm text-gray-600 text-center mt-2">
        Update the details for the floor. Fields marked with * are mandatory.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomInput
          title="Floor Number*"
          type="text"
          name="floorNumber"
          inputProps={{
            onChange: handleInputChange,
            value: formData.floorNumber || "",
          }}
        />
        <CustomInput
          title="Total Units*"
          type="number"
          name="totalUnits"
          inputProps={{
            onChange: handleInputChange,
            value: formData.totalUnits || "",
          }}
        />
        <CustomInput
          title="Units Available*"
          type="number"
          name="unitsAvailable"
          inputProps={{
            onChange: handleInputChange,
            value: formData.unitsAvailable || "",
          }}
        />
        <CustomInput
          title="Floor Area (sq.ft)*"
          type="text"
          name="floorArea"
          inputProps={{
            onChange: handleInputChange,
            value: formData.floorArea || "",
          }}
        />
      </div>

      <div className="mt-8">
        <label className="block text-sm font-medium text-gray-700">Upload Floor Photos (Optional)</label>
        <div className="mt-4 flex flex-col items-center">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="floor-image-upload"
            onChange={handleImageUpload}
          />
          <label
            htmlFor="floor-image-upload"
            className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Choose Image
          </label>
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="mt-4 w-32 h-32 object-cover rounded-md"
            />
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-4">
        <button
          type="button"
          className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={handleCancel}
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

export default FloorInformation;

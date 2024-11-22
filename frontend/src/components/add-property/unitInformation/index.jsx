import CustomInput from "../../common/CustomInput";
import CustomDropdown from "../../common/CustomDropdown";
import { useMatchStore } from "../../../store/projectStore";
import { useEffect } from "react";
import { getOneUnit } from "../../../utils/api";
import { photoAtom } from "../../../store/photo";
import { useAtom } from "jotai/react";
import { PhotoIcon } from "@heroicons/react/24/outline";

const UnitInformationForm = (props) => {
  const { unitId } = useMatchStore();
  const { updateInputValue, getValue } = props;
  const [photo, setPhoto] = useAtom(photoAtom);

  const type = "unitInformation";

  useEffect(() => {
    const unMount = async () => {
      const res = await getOneUnit(unitId);

      updateInputValue(
        res.data.data.attributes.unitArea,
        null,
        "unitInformation",
        "unitArea"
      );
      updateInputValue(
        res.data.data.attributes.unitNumber,
        null,
        "unitInformation",
        "unitNumber"
      );
      updateInputValue(
        res.data.data.attributes.numberOfParkings,
        null,
        "unitInformation",
        "noOfParkings"
      );
      updateInputValue(
        res.data.data.attributes.askingRental,
        null,
        "unitInformation",
        "askingRental"
      );
      updateInputValue(
        res.data.data.attributes.furnishingStatus,
        null,
        "unitInformation",
        "furnishingStatus"
      );
      updateInputValue(
        res.data.data.attributes.availabilityFor,
        null,
        "unitInformation",
        "availabilityFor"
      );
      updateInputValue(
        res.data.data.attributes.ageOfFurnishing,
        null,
        "unitInformation",
        "ageOfFurnishing"
      );
      updateInputValue(
        res.data.data.attributes.dateAvailable,
        null,
        "unitInformation",
        "dateAvailable"
      );
      
    };
    if (unitId) {
      unMount();
    }
  }, []);
  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Unit Information
        </h2>
        <p className="text-sm text-gray-600 mb-8">
          This information will be displayed publicly so be careful what you share
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CustomInput
            title="Unit Number"
            type="text"
            name="unitNumber"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm",
              placeholder: "Enter unit number"
            }}
            getValue={() => getValue(type, "unitNumber")}
          />
          <CustomInput
            title="Area (in Sqft)"
            type="text"
            name="unitArea"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm",
              placeholder: "Enter area in sqft"
            }}
            getValue={() => getValue(type, "unitArea")}
          />
          <CustomInput
            title="Mezzanine Area (in sqft)"
            type="text"
            name="mezzanineArea"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm",
              placeholder: "Enter mezzanine area"
            }}
            getValue={() => getValue(type, "mezzanineArea")}
          />
          <CustomDropdown
            title="Floor"
            name="floor"
            options={[
              { title: "Ground", value: "Ground" },
              { title: "First", value: "First" },
              { title: "Second", value: "Second" },
            ]}
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            }}
            getValue={() => getValue(type, "floor")}
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
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            }}
            getValue={() => getValue(type, "industrialLift")}
          />
          <CustomInput
            title="Lift Capacity (in Ton)"
            type="text"
            name="liftCapacity"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm",
              placeholder: "Enter lift capacity"
            }}
            getValue={() => getValue(type, "liftCapacity")}
          />
          <CustomDropdown
            title="Type of Floor"
            name="typeOfFloor"
            options={[
              { title: "RCC", value: "RCC" },
              { title: "VDF", value: "VDF" },
              { title: "FM II", value: "FM II" },
              { title: "Tremix", value: "Tremix" },
            ]}
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            }}
            getValue={() => getValue(type, "typeOfFloor")}
          />
          <CustomDropdown
            title="Type of Building"
            name="typeOfBuilding"
            options={[
              { title: "RCC", value: "RCC" },
              { title: "PEB", value: "PEB" },
            ]}
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            }}
            getValue={() => getValue(type, "typeOfBuilding")}
          />
          <CustomInput
            title="Clear Height (in ft)"
            type="text"
            name="clearHeight"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm",
              placeholder: "Enter clear height"
            }}
            getValue={() => getValue(type, "clearHeight")}
          />
          <CustomInput
            title="Centre Height (in Ft)"
            type="text"
            name="centreHeight"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm",
              placeholder: "Enter centre height"
            }}
            getValue={() => getValue(type, "centreHeight")}
          />
          <CustomInput
            title="No of Docks"
            type="text"
            name="noOfDocks"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm",
              placeholder: "Enter no of docks"
            }}
            getValue={() => getValue(type, "noOfDocks")}
          />
          <CustomInput
            title="Dock Level (in Ft)"
            type="text"
            name="dockLevel"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm",
              placeholder: "Enter dock level"
            }}
            getValue={() => getValue(type, "dockLevel")}
          />
          <CustomInput
            title="Parking Space"
            type="text"
            name="parkingSpace"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm",
              placeholder: "Enter parking space"
            }}
            getValue={() => getValue(type, "parkingSpace")}
          />
          <CustomDropdown
            title="Ventilation"
            name="ventilation"
            options={[
              { title: "Turbo vents", value: "Turbo vents" },
              { title: "ridge Vents", value: "ridge Vents" },
            ]}
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            }}
            getValue={() => getValue(type, "ventilation")}
          />
          <CustomInput
            title="Sky Light (%)"
            type="text"
            name="skyLight"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm",
              placeholder: "Enter sky light"
            }}
            getValue={() => getValue(type, "skyLight")}
          />
          <CustomDropdown
            title="Fire Provisions"
            name="fireProvisions"
            options={[
              { title: "Hydrants", value: "Hydrants" },
              { title: "Spriklers", value: "Spriklers" },
            ]}
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            }}
            getValue={() => getValue(type, "fireProvisions")}
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
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            }}
            getValue={() => getValue(type, "fireNOC")}
          />
          <CustomInput
            title="Fire Water Tank Capacity (in liters)"
            type="text"
            name="fireWaterTankCapacity"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm",
              placeholder: "Enter fire water tank capacity"
            }}
            getValue={() => getValue(type, "fireWaterTankCapacity")}
          />
          <CustomInput
            title="Rent (per sqft)"
            type="text"
            name="rent"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm",
              placeholder: "Enter rent"
            }}
            getValue={() => getValue(type, "rent")}
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
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            }}
            getValue={() => getValue(type, "possession")}
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
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            }}
            getValue={() => getValue(type, "officeSpace")}
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
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            }}
            getValue={() => getValue(type, "toilets")}
          />
          <CustomDropdown
            title="Occupancy Status"
            name="occupancyStatus"
            options={[
              { title: "Occupied", value: "Occupied" },
              { title: "Vacant", value: "Vacant" },
            ]}
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            }}
            getValue={() => getValue(type, "occupancyStatus")}
          />
          <CustomInput
            title="Occupied Company Name"
            type="text"
            name="occupiedCompanyName"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              disabled: getValue(type, "occupancyStatus") !== "Occupied",
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm",
              placeholder: "Enter occupied company name"
            }}
            getValue={() => getValue(type, "occupiedCompanyName")}
          />
          <CustomInput
            title="Date of Availablity"
            type="date"
            name="dateAvailable"
            inputProps={{
              onChange: (e) => updateInputValue(e.target.value, e, type),
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            }}
            getValue={() => getValue(type, "floorNumber")}
          />
          <div className="col-span-full mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border-2 border-dashed border-gray-300 px-6 py-10 hover:border-gray-400 transition-colors">
              <div className="text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500">
                    <span onClick={() => document.getElementById('upload-file-input').click()}
                      className="cursor-pointer">Upload a file</span>
                    <input
                      id="upload-file-input"
                      name="FloorImage"
                      type="file"
                      className="sr-only"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        const url = URL.createObjectURL(file);
                        setPhoto({ ...photo, FloorImage: url });
                        updateInputValue(file, e, type);
                      }}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600 mt-2">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
          {photo?.FloorImage && (
            <div className="col-span-full mt-4">
              <div className="relative w-40 h-40 mx-auto rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={photo?.FloorImage} 
                  alt='Uploaded Image' 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UnitInformationForm;

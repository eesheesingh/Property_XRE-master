// import { create } from 'zustand';

// export const useMatchStore = create((set) => ({
//     projectId: null,
//     setProjectId: (inputVal) => set((state) => ({ projectId: inputVal })),
//     unitId: null,
//     setUnitId: (inputVal) => set((state) => ({ unitId: inputVal })),
//     floorId: null,
//     setFloorId: (inputVal) => set((state) => ({ floorId: inputVal })),
//     personId: null,
//     setPersonId: (inputVal) => set((state) => ({ personId: inputVal })),
//     currentFormIndex: 0,
//     setCurrentFormIndex: (inputVal) => set((state) => ({ currentFormIndex: inputVal }))
// }));


import { create } from 'zustand';

const sampleData = [
  {
    id: "1",
    type: "Individual / Logistics Park",
    title: "Prime Logistics Hub",
    location: "NH-8, Gurugram, Haryana",
    total_area: "20000",
    occupied_area: "15000",
    status: "Approved",
    associatedContacts: [
      {
        associatedName: "Ravi Kumar",
        associatedEmail: "ravi.kumar@example.com",
        associatedNumber: "9876543211",
      }
    ],
    floorInformation: {
      id: "F1",
      floorNumber: "Ground",
      totalUnits: "2",
      unitsAvailable: "1",
      floorArea: "20000",
      FloorImage: {},
    },
    unitInformation: {
      id: "U1",
      area: "10000",
      mezzanineArea: "2000",
      floor: "Ground",
      industrialLift: "Yes",
      liftCapacity: "5",
      typeOfFloor: "RCC",
      typeOfBuilding: "PEB",
      clearHeight: "30",
      centreHeight: "35",
      noOfDocks: "4",
      dockLevel: "4",
      parkingSpace: "1000",
      ventilation: "Turbo vents",
      skyLight: "30",
      fireProvisions: "Hydrants",
      fireNOC: "Yes",
      fireWaterTankCapacity: "50000",
      rent: "45",
      possession: "Immediate",
      officeSpace: "Yes",
      toilets: "Yes",
      occupancyStatus: "Vacant",
      occupiedCompanyName: "",
      associatedContacts: [
        {
          associatedName: "Amit Sharma",
          associatedEmail: "amit.sharma@example.com",
          associatedNumber: "9123456789",
        }
      ],
    },
    ownerInformation: {
      id: "O1",
      name: "Rohan Mehra",
      email: "rohan.mehra@example.com",
      mobileNumber: "9876543210",
    },
  },
  {
    id: "2",
    type: "Individual / Logistics Park",
    title: "Modern Warehouse Complex",
    location: "NH-8, Gurugram, Haryana",
    total_area: "15000",
    occupied_area: "10000",
    status: "Drafts",
    associatedContacts: [
      {
        associatedName: "Priya Verma",
        associatedEmail: "priya.verma@example.com",
        associatedNumber: "9812345678",
      }
    ],
    floorInformation: {
      id: "F2",
      floorNumber: "First",
      totalUnits: "1",
      unitsAvailable: "1",
      floorArea: "15000",
      FloorImage: {},
    },
    unitInformation: {
      id: "U2",
      area: "15000",
      mezzanineArea: "3000",
      floor: "First",
      industrialLift: "Can be done",
      liftCapacity: "3",
      typeOfFloor: "VDF",
      typeOfBuilding: "RCC",
      clearHeight: "25",
      centreHeight: "30",
      noOfDocks: "3",
      dockLevel: "4",
      parkingSpace: "800",
      ventilation: "Ridge Vents",
      skyLight: "25",
      fireProvisions: "Spriklers",
      fireNOC: "Can be done",
      fireWaterTankCapacity: "30000",
      rent: "40",
      possession: "2 months",
      officeSpace: "Can be done",
      toilets: "Yes",
      occupancyStatus: "Vacant",
      occupiedCompanyName: "",
      associatedContacts: [
        {
          associatedName: "Neha Gupta",
          associatedEmail: "neha.gupta@example.com",
          associatedNumber: "9823456781",
        }
      ],
    },
    ownerInformation: {
      id: "O2",
      name: "Anjali Shah",
      email: "anjali.shah@example.com",
      mobileNumber: "9988776655",
    },
  },
  {
    id: "3",
    type: "Individual / Logistics Park",
    title: "Premium Logistics Center",
    location: "NH-8, Gurugram, Haryana",
    total_area: "25000",
    occupied_area: "25000",
    status: "Approved",
    associatedContacts: [],
    floorInformation: {
      id: "F3",
      floorNumber: "Ground",
      totalUnits: "1",
      unitsAvailable: "0",
      floorArea: "25000",
      FloorImage: {},
    },
    unitInformation: {
      id: "U3",
      area: "25000",
      mezzanineArea: "5000",
      floor: "Ground",
      industrialLift: "Yes",
      liftCapacity: "8",
      typeOfFloor: "FM II",
      typeOfBuilding: "PEB",
      clearHeight: "35",
      centreHeight: "40",
      noOfDocks: "6",
      dockLevel: "4",
      parkingSpace: "1500",
      ventilation: "Turbo vents",
      skyLight: "35",
      fireProvisions: "Hydrants",
      fireNOC: "Yes",
      fireWaterTankCapacity: "75000",
      rent: "50",
      possession: "6 months",
      officeSpace: "Yes",
      toilets: "Yes",
      occupancyStatus: "Occupied",
      occupiedCompanyName: "Global Logistics Ltd",
      associatedContacts: [
        {
          associatedName: "Ramesh Kulkarni",
          associatedEmail: "ramesh.kulkarni@example.com",
          associatedNumber: "9912345678",
        }
      ],
    },
    ownerInformation: {
      id: "O3",
      name: "Karthik Gowda",
      email: "karthik.gowda@example.com",
      mobileNumber: "9123456789",
    },
  },
];

const persistToLocalStorage = (properties) => {
  localStorage.setItem("properties", JSON.stringify(properties));
};

export const useMatchStore = create((set) => ({
  properties: JSON.parse(localStorage.getItem("properties")) || sampleData,

 // Update the updateProperty function
updateProperty: (propertyId, updatedData) => {
  set((state) => {
    const updatedProperties = state.properties.map((property) => {
      if (property.id === propertyId) {
        // If we're updating unitInformation directly
        if (updatedData.unitInformation) {
          return {
            ...property,
            unitInformation: {
              ...property.unitInformation,
              ...updatedData.unitInformation,
            },
          };
        }
        // For other updates (like associatedContacts)
        return {
          ...property,
          ...updatedData,
        };
      }
      return property;
    });
    persistToLocalStorage(updatedProperties);
    return { properties: updatedProperties };
  });
},

  addProperty: (formData, isDraft = false) => set((state) => {
    const newProperty = {
      id: String(state.properties.length + 1),
      type: formData.projectInformation.buildingType || "",
      title: formData.projectInformation.name || "",
      location: formData.projectInformation.location || "",
      total_area: formData.projectInformation.totalArea || "",
      vacant_area: formData.projectInformation.vacantArea || "",
      status: isDraft ? "Drafts" : "Pending",
      associatedContacts: formData.projectInformation.associatedContacts || [],
      floorInformation: {
        id: `F${state.properties.length + 1}`,
        floorNumber: "",
        totalUnits: "",
        unitsAvailable: "",
        floorArea: "",
        FloorImage: {},
      },
      unitInformation: {
        id: `U${state.properties.length + 1}`,
        area: formData.unitInformation.area || "",
        mezzanineArea: formData.unitInformation.mezzanineArea || "",
        floor: formData.unitInformation.floor || "",
        industrialLift: formData.unitInformation.industrialLift || "",
        liftCapacity: formData.unitInformation.liftCapacity || "",
        typeOfFloor: formData.unitInformation.typeOfFloor || "",
        typeOfBuilding: formData.unitInformation.typeOfBuilding || "",
        clearHeight: formData.unitInformation.clearHeight || "",
        centreHeight: formData.unitInformation.centreHeight || "",
        noOfDocks: formData.unitInformation.noOfDocks || "",
        dockLevel: formData.unitInformation.dockLevel || "",
        parkingSpace: formData.unitInformation.parkingSpace || "",
        ventilation: formData.unitInformation.ventilation || "",
        skyLight: formData.unitInformation.skyLight || "",
        fireProvisions: formData.unitInformation.fireProvisions || "",
        fireNOC: formData.unitInformation.fireNOC || "",
        fireWaterTankCapacity: formData.unitInformation.fireWaterTankCapacity || "",
        rent: formData.unitInformation.rent || "",
        possession: formData.unitInformation.possession || "",
        officeSpace: formData.unitInformation.officeSpace || "",
        toilets: formData.unitInformation.toilets || "",
        occupancyStatus: formData.unitInformation.occupancyStatus || "",
        occupiedCompanyName: formData.unitInformation.occupiedCompanyName || "",
        associatedContacts: formData.unitInformation.associatedContacts || [],
      },
      ownerInformation: {
        id: `O${state.properties.length + 1}`,
        name: formData.ownerInformation.name || "",
        email: formData.ownerInformation.email || "",
        mobileNumber: formData.ownerInformation.mobileNumber || "",
      },
    };

    const updatedProperties = [newProperty, ...state.properties];
    persistToLocalStorage(updatedProperties);
    return { properties: updatedProperties };
  }),

  currentFormIndex: 0,
  setCurrentFormIndex: (inputVal) => set(() => ({ currentFormIndex: inputVal })),
}));

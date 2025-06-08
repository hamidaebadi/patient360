import PatientProfileCard from "./PatientProfileCard"
import { useState } from "react";
import Card from "../../../components/Card";
import { CardContent } from "../../../components/Card";
import { PencilIcon } from "lucide-react";
 const mockPatient = {
        id: 1,
        full_name: "Emily Johnson",
        gender: "Female",
        age: 34,
        risk_score: 0.82,
        status: "Critical",
        assigned_doctor_name: "Dr. Harris",
        photoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    };

const PatientDetailView = () => {
  const [activeTab, setActiveTab] = useState("vitals");

  const tabs = [
    { id: "vitals", label: "Vitals" },
    { id: "history", label: "Visit History" },
    { id: "notes", label: "Doctor's Notes" },
    { id: "attachments", label: "Attachments" }
  ];

  return (
    <div className="flex flex-col justify-between gap-y-10">
    <PatientProfileCard patient={mockPatient}/>

      {/* Main Content Area */}
      <main className="">
        <div className="flex border-b pb-2 justify-around gap-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`flex items-center justify-center py-4 px-2 text-lg font-medium transition
                 bg-gray-100  w-full rounded ${
                activeTab === tab.id
                  ? "font-extrabold bg-white"
                  : "border-transparent text-gray-800 hover:bg-gray-300 hover:font-bold"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "vitals" && (
          <Card>
            <CardContent>
              <h3 className="text-lg font-semibold mb-4">Vitals</h3>
              <table className="min-w-full text-sm text-left text-gray-600">
                <tbody>
                  <tr className="border-b">
                    <th className="py-2 px-4 font-medium text-gray-700">Heart Rate</th>
                    <td className="py-2 px-4">82 bpm</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-2 px-4 font-medium text-gray-700">Blood Pressure</th>
                    <td className="py-2 px-4">120/80 mmHg</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-2 px-4 font-medium text-gray-700">Temperature</th>
                    <td className="py-2 px-4">98.6 °F</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-2 px-4 font-medium text-gray-700">Weight</th>
                    <td className="py-2 px-4">70 kg</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-2 px-4 font-medium text-gray-700">Blood Sugar</th>
                    <td className="py-2 px-4">95 mg/dL</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-2 px-4 font-medium text-gray-700">Oxygen Saturation</th>
                    <td className="py-2 px-4">97%</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        )}

        {activeTab === "history" && (
          <Card>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Visit History</h3>
              <p className="text-sm text-gray-600">Table or timeline of previous visits...</p>
            </CardContent>
          </Card>
        )}

        {activeTab === "notes" && (
          <Card>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Doctor's Notes</h3>
              <p className="text-sm text-gray-600">Medical notes, observations, prescriptions...</p>
            </CardContent>
          </Card>
        )}

        {activeTab === "attachments" && (
          <Card>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Attachments</h3>
              <p className="text-sm text-gray-600">PDFs, scans, lab results...</p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default PatientDetailView
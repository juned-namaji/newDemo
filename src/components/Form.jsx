import { useState } from "react";

const Form = () => {
    const [shgName, setShgName] = useState("");
    const [pan, setPan] = useState(null);
    const [memberCount, setMemberCount] = useState(0);
    const [nameOfRep, setNameOfRep] = useState("");
    const [mobOfRep, setMobOfRep] = useState(null);
    const [noOfMembers, setNoOfMembers] = useState(0);
    const [currentNumber, setCurrentNumber] = useState(2);
    const [members, setMembers] = useState({});
    const [memberLimitReached, setMemberLimitReached] = useState(false);
    const [password, setPassword] = useState(null);

    const handleMemberChange = (event) => {
        const count = parseInt(event.target.value, 10);
        setNoOfMembers(count);
        setMemberCount(count);
        if (currentNumber > count) {
            setCurrentNumber(count);
        }
    };

    const handleMemberNameChange = (event, index) => {
        if (currentNumber <= memberCount) {
            setMembers(prevMembers => ({
                ...prevMembers,
                [index]: {
                    ...prevMembers[index],
                    name: event.target.value
                }
            }));
        }
    };

    const handleMemberWhatsAppChange = (event, index) => {
        if (currentNumber <= memberCount) {
            setMembers(prevMembers => ({
                ...prevMembers,
                [index]: {
                    ...prevMembers[index],
                    whatsapp: event.target.value
                }
            }));
        }
    };

    const addMember = () => {
        if (currentNumber <= memberCount) {
            setCurrentNumber(currentNumber + 1);
        }
        if (currentNumber + 1 > memberCount) setMemberLimitReached(true);
        console.log(members);
    };

    const handleRepName = (e) => {
        setNameOfRep(e.target.value);
        setMembers(prevMembers => ({
            ...prevMembers,
            [1]: {
                ...prevMembers[1],
                name: e.target.value
            }
        }));
    }

    const handleRepNumber = (e) => {
        setMobOfRep(e.target.value);
        setMembers(prevMembers => ({
            ...prevMembers,
            [1]: {
                ...prevMembers[1],
                whatsapp: e.target.value
            }
        }));
    }

    const handleFormSubmit = async () => {
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    shgName,
                    pan,
                    memberCount,
                    nameOfRep,
                    mobOfRep,
                    members,
                    password,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Form submission successful:', data);
        } catch (error) {
            console.error('Error while submitting the form:', error);
        }
    }

    return (
        <div className="App min-h-screen bg-gray-100 flex flex-col items-center justify-start p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Financial Inclusion</h1>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
                <h2 className="text-lg text-gray-600 mb-6">Start your journey to a bright future :)</h2>

                <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name of the Self help group (SHG)</label>
                        <input
                            type="text"
                            placeholder="Enter a name here"
                            value={shgName}
                            onChange={(e) => setShgName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">PAN number of the group</label>
                        <input
                            type="text"
                            placeholder="Enter a PAN number here"
                            value={pan}
                            onChange={(e) => setPan(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Count of members in this Group</label>
                        <input
                            type="number"
                            placeholder="Enter group capacity between 2 and 20"
                            value={noOfMembers}
                            onChange={handleMemberChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Enter your password</label>
                        <input
                            type="text"
                            placeholder="Enter your name here"
                            value={(e) => { setPassword(e.target.value) }}
                            onChange={handleRepName}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name of the group representative</label>
                        <input
                            type="text"
                            placeholder="Enter your name here"
                            value={nameOfRep}
                            onChange={handleRepName}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mobile number of the group representative</label>
                        <input
                            type="number"
                            placeholder="Enter your mobile number here"
                            value={mobOfRep}
                            onChange={handleRepNumber}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Enter the Name of the {currentNumber}{currentNumber === 1 ? "st" : currentNumber === 2 ? "nd" : currentNumber === 3 ? "rd" : "th"} member</label>
                        <input
                            type="text"
                            placeholder="Enter member's name here"
                            value={members[currentNumber]?.name || ''}
                            onChange={(e) => handleMemberNameChange(e, currentNumber)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Enter the WhatsApp number of the {currentNumber}{currentNumber === 1 ? "st" : currentNumber === 2 ? "nd" : currentNumber === 3 ? "rd" : "th"} member</label>
                        <input
                            type="number"
                            placeholder="Member's WhatsApp number here"
                            value={members[currentNumber]?.whatsapp || ''}
                            onChange={(e) => handleMemberWhatsAppChange(e, currentNumber)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {memberLimitReached && <label className="text-red-700">Members limit reached</label>}
                    <div className="col-span-full flex justify-end">
                        <button
                            type="button"
                            onClick={addMember}
                            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Add {currentNumber}{currentNumber === 1 ? "st" : currentNumber === 2 ? "nd" : currentNumber === 3 ? "rd" : "th"} member
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={currentNumber == memberCount}
                        onClick={handleFormSubmit}
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Create a account</button>
                </form>
            </div>
        </div>
    )
}

export default Form;
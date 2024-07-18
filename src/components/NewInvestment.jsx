import React from 'react';
import {
    Modal,
    Button,
    Form,
    Dropdown,
    ModalHeader,
    ModalContent,
    ModalActions,
    FormField
} from 'semantic-ui-react';
import Suggestions from './Suggestions';
import { Link } from 'react-router-dom';

const InvestForm = (props) => {
    const [open, setOpen] = React.useState(false);
    const [riskLevel, setRiskLevel] = React.useState('Select Risk Level');
    const [amount, setAmount] = React.useState(0);

    const handleDropdownChange = (e, { value }) => {
        setRiskLevel(value);
    };

    const handleSubmit = () => {

    }

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button className="bg-blue-500 text-white py-2 px-4 rounded mb-11 font-serif">Apply for Investments</Button>}
            className="p-4"
        >
            <ModalHeader className="text-xl font-bold mb-4">Fill the form so that we can suggest you the best securities to invest in:))</ModalHeader>
            <ModalContent>
                <Form className="space-y-6">
                    <FormField>
                        <label className="block text-gray-700">Enter the amount to be invested:</label>
                        <input onChange={(e) => { setAmount(e.target.value) }} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder='in Indian rupees' />
                    </FormField>
                    <FormField>
                        <label className="block text-gray-700">How much risk can you take?</label>
                        <Dropdown
                            text={riskLevel}
                            fluid
                            selection
                            className="w-full"
                            options={[
                                { key: 'low', text: 'Low', value: 'Low' },
                                { key: 'medium', text: 'Medium', value: 'Medium' },
                                { key: 'high', text: 'High', value: 'High' }
                            ]}
                            onChange={handleDropdownChange}
                        />
                    </FormField>
                </Form>
            </ModalContent>
            <ModalActions className="flex justify-end space-x-4">
                <Button color='black' onClick={() => setOpen(false)} className="bg-gray-500 text-white py-2 px-4 rounded">
                    Cancel
                </Button>
                <Button
                    content="Suggest some funds"
                    labelPosition='right'
                    icon='checkmark'
                    type="submit"
                    onClick={handleSubmit}
                    positive
                    className="bg-green-500 text-white py-2 px-4 rounded"
                />
            </ModalActions>
        </Modal>
    );
};
export default InvestForm;

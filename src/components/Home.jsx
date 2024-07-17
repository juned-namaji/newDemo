import React from 'react';
import InvestForm from './NewInvestment';
import Header from './Header';
import { Grid, Divider, Segment, Image } from 'semantic-ui-react';

function HomePage() {
    const investments = [
        { name: 'Mutual Fund A', invested: 5000, currentValue: 5500, returns: '10%' },
        { name: 'Mutual Fund B', invested: 10000, currentValue: 11000, returns: '10%' },
        { name: 'Mutual Fund C', invested: 15000, currentValue: 16500, returns: '10%' },
        { name: 'Mutual Fund D', invested: 20000, currentValue: 22000, returns: '10%' },
    ];

    return (
        <div className="text-center pb-1">
            <Header />
            <Segment>
                <Grid columns={2} relaxed="very">
                    <Grid.Column width={6}>
                        <div className="p-4">
                            <h1>Rs.9383</h1>
                            <label>Total </label>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <main>
                            <div className="flex flex-col items-center my-8 w-11/12 md:w-2/3 lg:w-1/2 mx-auto">
                                {investments.map((investment, index) => (
                                    <div className="border border-gray-300 p-5 my-5 w-full shadow-lg flex flex-col items-start" key={index}>
                                        <p className="font-bold text-lg">{investment.name}</p>
                                        <p>Invested = {investment.invested}</p>
                                        <p>Current Value = {investment.currentValue}</p>
                                        <p>Returns = {investment.returns}</p>
                                        <div className="flex justify-between w-full mt-3">
                                            <button className="bg-blue-500 text-white py-2 px-4 rounded">Add</button>
                                            <button className="bg-blue-500 text-white py-2 px-4 rounded">Withdraw</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-5 mb-7">
                                <InvestForm />
                            </div>
                        </main>
                    </Grid.Column>
                </Grid>
                <Divider vertical />
            </Segment>
        </div>
    );
}

export default HomePage;
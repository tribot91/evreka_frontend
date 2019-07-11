import React, { Component } from 'react';
import Route from './Route';
import SearchField from './SearchField';

class RouteList extends Component {
    constructor() {
        super();
        this.filteredList = [{ name: "13:30 Vardiyası", vehicle: "Fenertepe", time: "13:12", driver: "Tanır Nalbant", helper: "-", performance: "66/103", status: "Dispatched" },
        { name: "13:30 Vardiyası", vehicle: "Boğazköy", time: "13:11", driver: "Selçuk Yurt", helper: "-", performance: "58/85", status: "Finished" },
        { name: "07:30 Vardiyası", vehicle: "Başakşehir", time: "07:30", driver: "Emri Akça", helper: "-", performance: "108/148", status: "Finished" }];
        this.filter = ''

        this.state = {
            name: { text: '', sort: null },
            vehicle: { text: '', sort: null },
            time: { text: '', sort: null },
            driver: { text: '', sort: null },
            helper: { text: '', sort: null },
            performance: { text: '', sort: null },
            status: { text: '', sort: null }
        }
    }

    updateSearch = (field) => (event) => this.setState({ [field]: { text: event.target.value, sort: this.state[field].sort } })

    render() {
        this.filteredList = this.props.routelist
            .filter(route => !Object.keys(route).some(key => route[key].indexOf(this.state[key].text) === -1))

        Object.keys(this.state).forEach((key) => {
            if (this.state[key].sort === true)
                this.filteredList.sort((a, b) => a > b ? 1 : -1)
            else if (this.state[key].sort === false)
                this.filteredList.reverse((a, b) => a > b ? 1 : -1 )
        })

        return (
            <div>
                <div style={{ display: 'flex', marginBottom: '10px' }}>
                    <SearchField updateSearch={this.updateSearch('name')} field="name" size="20"></SearchField>
                    <SearchField updateSearch={this.updateSearch('vehicle')} field="vehicle" size="10"></SearchField>
                    <SearchField updateSearch={this.updateSearch('time')} field="time" size="10"></SearchField>
                    <SearchField updateSearch={this.updateSearch('driver')} field="driver" size="20"></SearchField>
                    <SearchField updateSearch={this.updateSearch('helper')} field="helper" size="20"></SearchField>
                    <SearchField updateSearch={this.updateSearch('performance')} field="performance" size="10"></SearchField>
                    <SearchField updateSearch={this.updateSearch('status')} field="status" size="20"></SearchField>
                    <div style={{ width: '5%' }} />
                </div>
                <div>
                    {this.filter}
                    {this.filteredList.map((data, index) =>
                        <Route
                            key={index}
                            name={data.name}
                            vehicle={data.vehicle}
                            time={data.time}
                            driver={data.driver}
                            helper={data.helper}
                            performance={data.performance}
                            status={data.status}>
                        </Route>
                    )}
                </div>
            </div>
        );
    }
}

export default RouteList;
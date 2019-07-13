import React, { Component } from 'react';
import Route from './Route';
import SearchField from './SearchField';

class RouteList extends Component {
    constructor() {
        super();
        this.filteredList = [{ name: "13:30 Vardiyası", vehicle: "Fenertepe", time: "13:12", driver: "Tanır Nalbant", helper: "-", performance: "66/103", status: "Dispatched" },
        { name: "13:30 Vardiyası", vehicle: "Boğazköy", time: "13:11", driver: "Selçuk Yurt", helper: "-", performance: "58/85", status: "Finished" },
        { name: "07:30 Vardiyası", vehicle: "Başakşehir", time: "07:30", driver: "Emri Akça", helper: "-", performance: "108/148", status: "Finished" }];

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
    updateSort = (field) => (event) => {
        let sortType = event.target.attributes['data-icon'] ? event.target.attributes['data-icon'].value : event.target.parentElement.attributes['data-icon'].value;
        this.setState({
            [field]: {
                text: this.state[field].text,
                sort: sortType === 'sort' ? true : (sortType === 'sort-up' ? false : null)
            }
        })
        Object.keys(this.state).forEach(field2 => {
            if (field2 !== field) {
                this.setState({
                    [field2]: {
                        text: this.state[field2].text,
                        sort: null
                    }
                })
            }
        })
    }

    render() {
        try {
            this.filteredList = this.props.routelist
                .filter(route => !Object.keys(route).some(key => route[key].indexOf(this.state[key].text) === -1))
        } catch (err) {}

        Object.keys(this.state).forEach((key) => {
            if (this.state[key].sort === true)
                this.filteredList.sort((a, b) => a[key] > b[key] ? 1 : -1)
            else if (this.state[key].sort === false)
                this.filteredList.sort((a, b) => a[key] < b[key] ? 1 : -1)
        })

        return (
            <div>
                <div className="flex-sb" style={{ margin: '0 10px 10px' }}>
                    {
                        Object.keys(this.state).map((field, index) =>
                            <SearchField key={index}
                                updateSort={this.updateSort(field)}
                                updateSearch={this.updateSearch(field)}
                                field={field}
                                status={this.state[field]}
                                size={field !== 'vehicle' && field !== 'time' && field !== 'performance' ? 20 : 10} >
                            </SearchField>)
                    }
                    <div style={{ width: '5%' }} />
                </div>
                <div>
                    {this.filteredList.map((data, index) =>
                        <Route
                            changeVehicle={this.props.changeVehicle}
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
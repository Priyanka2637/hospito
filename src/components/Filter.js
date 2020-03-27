import React, { Component } from 'react';
export default class Products extends Component {

    render() {


        return (
            <div className="row">
                <div className="col-md-4">
                    {`${this.props.count} products found.`}
                </div>
                <div className="col-md-4">
                    <label>Order by
               <select className="form-control" value={this.props.sort} onChange={this.props.handleSortChange}>
                            <option value="">Select</option>
                            <option value="lowestprice">Lowest to highest</option>
                            <option value="highestprice">Highest to lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label > Filter 
               <select className="form-control" value={this.props.size} onChange={this.props.handleSizeChange}>
                            <option value="">ALL</option>
                            <option value="FEVER">XS</option>
                            <option value="PAIN">S</option>
                            <option value="COLD">M</option>
                            <option value="OTHERS">L</option>
                         
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}
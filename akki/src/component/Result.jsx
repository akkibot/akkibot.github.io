import React, { Component, Fragment } from "react";

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

const color = ["pink lighten-4", "yellow accent-2"];

function colorSelection(index) {
    if (index >= 0 && index <= 5)
        return "blue lighten-4";
    var num = parseInt((index - 6) / 9);
    if (num % 2 == 0)
        return color[0];
    else
        return color[1];
}

export default class Result extends Component {
    calculateResult = () => {
        const {
            amount,
            days,
            mateWater,
            minLength,
            maxLength,
            minWidth,
            maxWidth,
            minHeight,
            maxHeight,
        } = this.props.rawData;

        let constants = {
            perDayWage: 190,
            rate: 118.62,
        };

        constants['mwQuantity'] = Math.round(amount / (days * constants.perDayWage * 50));

        let renderBody = [];
        renderBody.push(
            <div className="row no-bottom-margin grey darken-4 white-text">
                <div className="col border s1">No</div>
                <div className="col border s2">Length</div>
                <div className="col border s2">Width</div>
                <div className="col border s2">Height</div>
                <div className="col border s2">Result</div>
                <div className="col border s3">Cumulative</div>
            </div>
        )

        var mateVal = Math.round(constants.mwQuantity * constants.perDayWage * days);
        // var mateVal = mate * constants.perDayWage * days;
        console.log("mateVal", mateVal);

        var waterVal = mateVal;
        console.log("waterVal", waterVal);

        var excavation;
        if (mateWater === "true") {
            excavation = amount - 2 * mateVal;
            console.log("excavation", excavation);
        } else {
            mateVal = 0;
            waterVal = 0;
            excavation = amount;
            console.log("excavation", excavation);
        }

        var quantity = parseFloat(excavation / constants.rate).toFixed(2);
        console.log("quantity", quantity);

        let resultsTotal = 0;
        let sum = 0, count = 0;
        while (sum <= quantity) {
            var length = randomNumber(minLength, maxLength).toFixed(1);
            var width = randomNumber(minWidth, maxWidth).toFixed(1);
            var height = randomNumber(minHeight, maxHeight).toFixed(2);
            var result = parseFloat(length * width * height).toFixed(2);
            result = parseFloat(result);
            var oldSum = sum;
            sum += result;
            sum = parseFloat(parseFloat(sum).toFixed(2));


            if (sum <= quantity) {

                renderBody.push(
                    <div className={`row no-bottom-margin ${colorSelection(count)}`}>
                        <div className="col border s1">1</div>
                        <div className="col border s2">{String(length)}</div>
                        <div className="col border s2">{String(width)}</div>
                        <div className="col border s2">{String(height)}</div>
                        <div className="col border s2">{String(result)}</div>
                        <div className="col border s3">{String(sum)}</div>
                    </div>
                )
                console.log(
                    "1 * " +
                    length +
                    " * " +
                    width +
                    " * " +
                    height +
                    " = " +
                    result +
                    "     " +
                    sum
                );
                resultsTotal += parseFloat(result);
            } else {
                var remainderVal = quantity - oldSum;
                remainderVal = parseFloat(parseFloat(remainderVal).toFixed(2));
                length = randomNumber(minLength, maxLength).toFixed(1);
                height = randomNumber(minHeight, maxHeight).toFixed(2);

                width = remainderVal / (length * height);

                result = parseFloat(length * width * height);

                console.log("remainderVal", remainderVal);
                renderBody.push(
                    <div className={`row no-bottom-margin ${colorSelection(count)}`}>
                        <div className="col border s1">1</div>
                        <div className="col border s2">{String(length)}</div>
                        <div className="col border s2">{String(width.toFixed(2))}</div>
                        <div className="col border s2">{String(height)}</div>
                        <div className="col border s2">{String(result.toFixed(2))}</div>
                        <div className="col border s3">{String(quantity)}</div>
                    </div>
                )
                console.log(
                    "1 * " +
                    length +
                    " * " +
                    width.toFixed(2) +
                    " * " +
                    height +
                    " = " +
                    result.toFixed(2) +
                    "     " +
                    quantity
                );
                resultsTotal += parseFloat(result);
            }
            count += 1;
        }

        renderBody.push(
            <div className="row no-bottom-margin lime accent-3">
                <div className="col border s7">Total Quantity</div>
                <div className="col border s2">{String(resultsTotal.toFixed(2))}</div>
                <div className="col border s3">{String(resultsTotal.toFixed(2))}</div>
            </div>
        )
        renderBody.push(
            <div className="row no-bottom-margin lime accent-3">
                <div className="col border s9">@rate</div>
                <div className="col border s3">{constants.rate}</div>
            </div>
        )
        renderBody.push(
            <div className="row no-bottom-margin lime accent-3">
                <div className="col border s9">Excavation Amount</div>
                <div className="col border s3">{excavation}</div>
            </div>
        )
        mateWater === "true" && renderBody.push(
            <div className="row no-bottom-margin  blue lighten-3">
                <div className="col border s9">Mate Amount     ({`${constants.mwQuantity}  *  ${constants.perDayWage}  *  ${days}`})</div>
                <div className="col border s3">{mateVal}</div>
            </div>
        )
        mateWater === "true" && renderBody.push(
            <div className="row no-bottom-margin  blue lighten-3">
                <div className="col border s9">Water Amount     ({`${constants.mwQuantity}  *  ${constants.perDayWage}  *  ${days}`})</div>
                <div className="col border s3">{mateVal}</div>
            </div>
        )

        renderBody.push(
            <Fragment>
                <div className="row no-bottom-margin"></div>
                <div className="row no-bottom-margin orange lighten-2">
                    <div className="col border s9">Total Amount</div>
                    <div className="col border s3">{excavation + (2 * mateVal)}</div>
                </div>
            </Fragment>
        )
        renderBody.push(
            <Fragment>
                <div className="row no-bottom-margin"></div>
                <div className="row no-bottom-margin">
                    <div className="col border s9">Total Iterations</div>
                    <div className="col border s3">{count}</div>
                </div>
            </Fragment>
        )

        return (
            <div>
                {renderBody}
            </div>
        )
    };

    render() {
        return (
            <div>
                {this.calculateResult()}
            </div>
        );
    }
}

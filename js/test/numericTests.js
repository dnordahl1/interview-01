
suite('Numbers', function () {

    suite('evenNumerics', function () {
        // setup the test data
        const testData = [
            { data: [1, 2, 3, 4], result: [2, 4] },
            { data: [1, 2, 3, 4, 'hello'], result: [2, 4] },
            { data: [1, 2, 3, 4, null], result: [2, 4] },
            { data: [1, 2, 3, 4, undefined], result: [2, 4] },
            { data: 0, result: null },
            { data: [], result: null },
            { data: undefined, result: null },
        ];
        // set up the test
        let testWithData = function (test) {
            return function () {
                let even = numericUtils.evenNumerics(test.data);
                assert.deepEqual(even, test.result);
            }
        }

        // run each test
        testData.forEach((dataItem) => {
            test("evenNumerics:" + JSON.stringify(dataItem.data), testWithData(dataItem));
        })
    });

    suite('largestNumber', function () {
        // test data
        const testData = [
            { data: [1, 2, 3, 4], result: 4 },
            { data: [1, 2, 3, 4, 'hello'], result: 4 },
            { data: [-1, -2, -3, -4, 'hello'], result: -1 },
            { data: [], result: null },
            { data: undefined, result: null },


        ];
        //test setup
        let testWithData = function (test) {
            return function () {
                let largest = numericUtils.largestNumber(test.data);
                assert.equal(largest, test.result);
            }
        }
        //test
        testData.forEach((dataItem) => {
            test("largestNumber:" + JSON.stringify(dataItem.data), testWithData(dataItem));
        })
    });


});



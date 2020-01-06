suite('License', function () {


    suite('validate', function () {
        // test data
        const testData = [
            { data: { license: "A12345678", state: "NE" }, result: true },
            { data: { license: "A12345", state: "NE" }, result: false },
            { data: { license: "A12345678", state: "MS" }, result: false },
            { data: { license: "123456789", state: "MS" }, result: true },
            { data: { license: "123456789", state: "XX" }, result: false },
            { data: { license: "123456789", state: null }, result: false },
            { data: { license: null, state: "XX" }, result: false },
        ];
        // test setup
        let testWithData = function (test) {
            return function () {
                let valid = licenseUtils.validate(test.data.license, test.data.state);
                assert.equal(valid, test.result);
            }
        }

        // run the tests
        testData.forEach((dataItem) => {
            test("validate:" + JSON.stringify(dataItem.data), testWithData(dataItem));
        })
    });



});



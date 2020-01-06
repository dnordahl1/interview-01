suite('Strings', function () {

    suite('reverse1', function () {
        // test data
        const testData = [
            { data: 'abc', result: 'cba' },
            { data: 'prime ', result: ' emirp' },
            { data: 123, result: null },
            { data: null, result: null },
            { data: undefined, result: null },
        ];
        // test setup
        let testWithData = function (test) {
            return function () {
                let reverse = stringUtils.reverse1(test.data);
                assert.equal(reverse, test.result);
            }
        }
        // run the tests
        testData.forEach((dataItem) => {
            test("reverse1:" + JSON.stringify(dataItem.data), testWithData(dataItem));
        })
    });

    suite('reverse2', function () {
        // test data
        const testData = [
            { data: 'abc', result: 'cba' },
            { data: 'prime ', result: ' emirp' },
            { data: 123, result: null },
            { data: null, result: null },
            { data: undefined, result: null },
        ];
        //test setup
        let testWithData = function (test) {
            return function () {
                let reverse = stringUtils.reverse2(test.data);
                assert.equal(reverse, test.result);
            }
        }
        // run tests
        testData.forEach((dataItem) => {
            test("reverse2:" + JSON.stringify(dataItem.data), testWithData(dataItem));
        })
    });

    suite('safeTruncate', function () {
        //data
        const testData = [
            { data: 'This is a test', length: 5, result: 'This ' },
            { data: 'This is a test', length: 50, result: 'This is a test' },
            { data: 'This is a test', length: -1, result: '' },
            { data: 123, length: 5, result: null },
            { data: 'This is a test', length: undefined, result: null },
            { data: null, length: 5, result: null },
            { data: undefined, length: 5, result: null },

        ];
        // test setup
        let testWithData = function (test) {
            return function () {
                let trunc = stringUtils.safeTruncate(test.data, test.length);
                assert.equal(trunc, test.result);
            }
        }
        //run
        testData.forEach((dataItem) => {
            test("truncate:" + JSON.stringify(dataItem.data), testWithData(dataItem));
        })
    });

});



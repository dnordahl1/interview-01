suite('LunchUtils', function () {

    // run the test
    test('getDow', function () {
        let sun = lunchUtils.getDow(0);
        assert.equal(sun, 'Sunday');
    })

    // run the test
    test('getLunch', function () {
        let dow = [{ dow: 'Sunday' }, { dow: 'Monday' }, { dow: 'Tuesday' }]
        lunchUtils.getLunch(dow);
        assert.equal(dow[0].getLunch(), 'pizza')
    })
});



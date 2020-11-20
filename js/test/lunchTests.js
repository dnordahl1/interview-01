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
        assert.equal(lunchUtils.getLunch(dow[0]), 'pizza')
    })
});



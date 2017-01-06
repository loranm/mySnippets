(function() {
    const value = process.argv[2]
    const myArray = [1, 3, 4, 5]

    function position(value) {
      const valueToTest = parseInt(value)
        if (isNaN(valueToTest)) {
            return 'not a number'
        } else if (myArray.indexOf(valueToTest) > -1) {
            return myArray.indexOf(valueToTest) + 1
        } else {
            return 'absent'
        }
    }


    function returnPostion(value) {
        const test = position(value);
        console.log(typeof(test))
        switch (test) {
            case 1:
                return `je suis le premier sur ${myArray.length}`
                break;

            case 'not a number':
            case 'absent':
                return 'je ne suis pas dans le tableau'
                break;

            default:
                return `je suis le ${position(value)}ème sur ${myArray.length}`

        }
    }


    console.log(returnPostion(value))

})()

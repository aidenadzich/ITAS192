const main = async () => {
    const theURL = 'https://appdev.itas.ca/~amcdonald/192lab08/employees.json';
    const outRec = document.querySelector('#theresult');

    const response = await fetch(theURL);


    if (!response.ok) {
        console.error('Error:', error);
    } else {
        const employees = await response.json();
        
        employees.forEach(employee => {
            let departments = '';
            let employeeDepartments = employee.department;
            if(Array.isArray(employeeDepartments)) {
                employeeDepartments.forEach(department => {
                    departments += `${department}<br>`;
                });
            } else {
                departments += `${employeeDepartments}`;
            }

            let friends = '';
            let employeeFriends = employee.friends;
            if (Object.keys(employeeFriends).length > 1 && employeeFriends.firstname == undefined) {
                employeeFriends.forEach(friend => {
                    friends += `${friend.firstname} ${friend.lastname}<br>`;                   
                });
            } else if(Object.keys(employeeFriends).length == 2) {
                friends += `${employeeFriends.firstname} ${employeeFriends.lastname}`;
            } else {
                friends += 'No friends';
                console.log(`${employee.firstname} has no friends`);
            }

            outRec.innerHTML += `
            <div class="grid grid-cols-4 gap-0 text-gray-300 p-4 border-b border-gray-600">
                <div class="text-center border-r border-gray-600">${employee.firstname} ${employee.lastname} (${employee.empid})</div>
                <div class="text-center border-r border-gray-600">${employee.company}</div>
                <div class="text-center border-r border-gray-600">${departments}</div>
                <div class="text-center">${friends}</div>
            </div>`;
        });
    }
}

addEventListener('load', main);
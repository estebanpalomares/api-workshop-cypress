

describe('Authentication', () => {

    it('Reach the endpoint not using Authentication', () => {
        var response = cy.request("GET","https://www.httpbin.org/bearer")
        response.should((response) => { expect(response.status).to.eq(401);});
    });

    it('Reach the endpoint using Authentication', () => {
        var headers = {Authorization: 'Bearer tokentoken'}
        var response = cy.request({method: "GET", headers: headers,url:"https://www.httpbin.org/bearer"});
        response.should((response) => { expect(response.status).to.eq(200);});
    });

})
describe("Visuals", () => {
  afterEach(() => {
    cy.task("generateReport");
    cy.origin("https://0.0.0.0:8081/", () => {
      cy.visit(
        "https://0.0.0.0:8081/cypress-visual-report/cypress-visual-report.html"
      )
        .get("[data-tooltip='Expand all']")
        .click();

      cy.screenshot({
        capture: "fullPage",
      });
    });
  });
  it("should compare screenshot of the entire page", () => {
    cy.visit("https://genrandom.com/cats/");
    cy.compareSnapshot("cat-001", 0.2);
  });
  it("should compare screenshot of the entire page 002", () => {
    cy.visit("https://genrandom.com/cats/");
    cy.compareSnapshot("cat-002", 0.2);
  });
});

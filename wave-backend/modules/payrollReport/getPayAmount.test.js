const getPayAmount = require('./getPayAmount');

describe('Get Pay Amount', () => {
  it('Handles job group A ($20/hr)', () => {
    expect(getPayAmount({hoursWorked: 2, jobGroup: 'A'})).toBe(40);
  });
  it('Handles job group B ($30/hr)', () => {
    expect(getPayAmount({hoursWorked: 2, jobGroup: 'B'})).toBe(60);
  });
  it('Throws on job group C', () => {
    const typeC = () => getPayAmount({hoursWorked: 2, jobGroup: 'C'});
    expect(typeC).toThrowError(`Jobs can only be in group A or B, not group C`);
  });
});

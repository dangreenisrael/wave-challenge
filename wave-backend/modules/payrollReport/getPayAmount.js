module.exports = ({hoursWorked, jobGroup}) => {
  switch (jobGroup) {
    case 'A':
      return hoursWorked * 20;
    case 'B':
      return hoursWorked * 30;
      throw new Error(`Jobs can only be in group A or B, not group ${jobGroup}`);
  }
};

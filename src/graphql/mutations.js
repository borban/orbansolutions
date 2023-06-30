/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJobEntry = /* GraphQL */ `
  mutation CreateJobEntry(
    $input: CreateJobEntryInput!
    $condition: ModelJobEntryConditionInput
  ) {
    createJobEntry(input: $input, condition: $condition) {
      id
      companyNam
      jobTitle
      startDate
      targetDate
      jobDescription
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateJobEntry = /* GraphQL */ `
  mutation UpdateJobEntry(
    $input: UpdateJobEntryInput!
    $condition: ModelJobEntryConditionInput
  ) {
    updateJobEntry(input: $input, condition: $condition) {
      id
      companyNam
      jobTitle
      startDate
      targetDate
      jobDescription
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteJobEntry = /* GraphQL */ `
  mutation DeleteJobEntry(
    $input: DeleteJobEntryInput!
    $condition: ModelJobEntryConditionInput
  ) {
    deleteJobEntry(input: $input, condition: $condition) {
      id
      companyNam
      jobTitle
      startDate
      targetDate
      jobDescription
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;

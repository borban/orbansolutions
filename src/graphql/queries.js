/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJobEntry = /* GraphQL */ `
  query GetJobEntry($id: ID!) {
    getJobEntry(id: $id) {
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
export const listJobEntries = /* GraphQL */ `
  query ListJobEntries(
    $filter: ModelJobEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncJobEntries = /* GraphQL */ `
  query SyncJobEntries(
    $filter: ModelJobEntryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncJobEntries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;

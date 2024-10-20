## NRC (Negative Response Code) Overview

In this document, we will delve into the concept of NRC (Negative Response Code) within the context of diagnostic requests and responses.

### Introduction

NRC plays a crucial role in diagnostic communication protocols. Whenever a diagnostic request is sent by a tester to the ECU (Electronic Control Unit), the ECU is expected to respond accordingly. This response can be positive, negative, or in some cases, no response at all.

### Possible Outcomes

- **Positive Response:** Indicates successful execution of the request. A positive response includes the desired information, with a value of +40 added to it.
- **Negative Response:** Denotes a failure or error in the execution of the request. Negative responses are characterized by a first byte of 7F, followed by the service ID, and then the NRC (Negative Response Code).
- **No Response:** Occurs when the ECU does not provide any response within a specified time frame, usually governed by parameters like P2 and P2* timer.

### Understanding NRC Codes

NRC codes provide insight into the nature of the failure or error encountered during communication. Let's explore some common NRCs:

1. **NRC 10 - General Reject:**

   - Indicates a rejection due to a timeout. If the ECU fails to respond within the specified time frame, NRC 10 is sent.
2. **NRC 11 - Service Not Supported:**

   - Signifies that the requested service is not supported by the ECU.
3. **NRC 12 - Sub-function Not Supported:**

   - Occurs when a requested sub-function is not supported by the ECU.
4. **NRC 13 - Incorrect Message Length:**

   - Indicates a discrepancy in the length of the message sent.
5. **NRC 14 - Response Too Long:**

   - Denotes that the response data exceeds the maximum buffer size available.
6. **NRC 21 - Busy Repeat Request:**

   - Indicates that the ECU is still processing a previous request and cannot accommodate the new request.
7. **NRC 22 - Condition Not Correct:**

   - Occurs when a specific condition required for the request is not met.
8. **NRC 24 - Request Sequence Error:**

   - Signifies a deviation from the expected sequence of requests, especially relevant in security or bootloader services.
9. **NRC 31 - Request Out of Range:**

   - Denotes a request for a Data Identifier (DID) that is not configured or supported.
10. **NRC 33 - Security Access Denied:**

    - Indicates denial of access to a specific DID due to security level restrictions.
11. **NRC 35 - Invalid Key:**

    - Signifies that the provided security key is incorrect.
12. **NRC 36 - Exceeded Number of Attempts:**

    - Occurs when the maximum number of attempts to provide a correct key is exceeded.
13. **NRC 78 - Upload Download Not Accepted:**

    - Relevant in bootloader services, indicating that upload/download operations are not accepted.
14. **NRC 7F - Service Not Supported in Active Session:**

    - Indicates that the requested service is not supported in the active session.

### Conclusion

Understanding NRCs is essential for diagnosing communication issues between testers and ECUs. For further details on specific NRCs, refer to ISO 14229 documentation.

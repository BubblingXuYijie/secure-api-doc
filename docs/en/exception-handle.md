# Exception Handle

> When SecureApi fails, it throws a specific exception: `SecureApiException`, You can customize the global exception handler to handle this exception.

Example：

```java
@RestControllerAdvice
public class GlobalExceptionHandler {
    private final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    /**
     * Can be customized to handle SecureApi exceptions
     *
     * @param request request information
     * @param e       SecureApiException
     * @return Customize the return body, and the return result can also be encrypted here, if the url is configured to match /**, the return value will also be encrypted without comments
     */
    @ExceptionHandler(value = SecureApiException.class)
    //@EncryptApi
    public ResultEntity<Object> bizExceptionHandler(HttpServletRequest request, SecureApiException e) {
        logger.error("SecureApiException：{}", e.getErrorMsg());
        return ResultEntity.failure(500, e.getErrorMsg());
    }
}
```

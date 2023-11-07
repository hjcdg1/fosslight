package oss.fosslight.api.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Paging {
    public enum SortDirection {
        ASC, DESC
    }

    protected int page;
    protected int countPerPage;
    protected SortDirection sort;
    protected String sortColumn;

    public int getOffset() {
        return (page - 1) * countPerPage;
    }
}
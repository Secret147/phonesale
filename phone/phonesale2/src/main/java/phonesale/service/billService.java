package phonesale.service;

import java.util.List;

import phonesale.dto.billDTO;

public interface billService {
     void saveBill(billDTO dto,String username);
     List<billDTO> getAllBill(String username);
     List<billDTO> getAllBills();
     billDTO getBill(Long billId);
     void deleteBill(Long billId);
}

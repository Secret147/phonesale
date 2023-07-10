package phonesale.converter;

import org.springframework.stereotype.Component;

import phonesale.dto.billDTO;
import phonesale.entity.billEntity;

@Component
public class billConverter {

	public billEntity tobillEntity(billDTO dto) {
		billEntity entity = new billEntity();
		entity.setId(dto.getId());
		entity.setCreateAt(dto.getCreateAt());
		return entity;
	}
	public billDTO tobillDTO(billEntity entity) {
		billDTO dto = new billDTO();
		dto.setId(entity.getId());
		dto.setCreateAt(entity.getCreateAt());
		return dto;
	}

}

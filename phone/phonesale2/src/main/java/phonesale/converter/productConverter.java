package phonesale.converter;

import org.springframework.stereotype.Component;

import phonesale.dto.productDTO;

import phonesale.entity.productEntity;

@Component
public class productConverter {

	public productEntity toproductEntity(productDTO dto) {
		productEntity entity = new productEntity();
		entity.setId(dto.getId());
		entity.setDescription(dto.getName());
		entity.setMemory(dto.getMemory());
		entity.setImg(dto.getImg());
		entity.setPrice(dto.getPrice());
		entity.setName(dto.getName());
		return entity;
	}

	public productDTO toproductDTO(productEntity entity) {
		productDTO dto = new productDTO();
		dto.setId(entity.getId());
		dto.setDescription(entity.getName());
		dto.setMemory(entity.getMemory());
		dto.setImg(entity.getImg());
		dto.setPrice(entity.getPrice());
		dto.setName(entity.getName());
		return dto;
	}

}
